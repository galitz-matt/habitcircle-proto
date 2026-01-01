import { UsernameGenerator } from "@/lib/utils";
import type { AuthenticationReadModel } from "../read-models/authentication.read-model";
import type { HashingService } from "./hashing.service";
import { LoginResult } from "../dtos/results/login.result";
import type { UserReadModel } from "../read-models/user.read-model";
import type { UserRepository } from "../repositories/user.repository";
import { User } from "@/server/domain/entities/user.entity";
import type { LinkSessionService } from "./link-session.service";
import type { SessionService } from "./session.service";
import { inject, injectable } from "tsyringe";

@injectable()
export class AuthenticationService {
    constructor(
        @inject("AuthenticationReadModel")
        private readonly authReadModel: AuthenticationReadModel,
        @inject("HashingService")
        private readonly hashingService: HashingService,
        @inject("LinkSessionService")
        private readonly linkSessionService: LinkSessionService,
        @inject("SessionService")
        private readonly sessionService: SessionService,
        @inject("UserReadModel")
        private readonly userReadModel: UserReadModel,
        @inject("UserRepository")
        private readonly userRepository: UserRepository
    ) {}

    async loginWithCredentials(username: string, password: string): Promise<LoginResult> {
        const credentials = await this.authReadModel.findAuthenticationCredentialsByUsername(username);
        if (!credentials) {
            return { type: "INVALID_CREDENTIALS" };
        }

        const verified = await this.hashingService.compare(password, credentials.hashedPassword);
        if (!verified) {
            return { type: "INVALID_CREDENTIALS" };
        }
        return await this.finalizeLogin(credentials.userId)
    }

    async loginWithOAuth(
        provider: string, 
        providerAccountId: string, 
        emailAddress?: string,
        emailVerified?: boolean
    ): Promise<LoginResult> {
        // Does user exist w/ identity?
        const user = await this.userReadModel.findUserByOAuthIdentity(provider, providerAccountId);
        if (user) return await this.finalizeLogin(user.id);
        // Does user exist w/ email?`
        const candidates = await this.resolveUserByVerifiedEmailAddress(emailAddress, emailVerified);
        // More than one users use this email, prompt client to resolve
        if (candidates.length > 1) return this.handleAmbiguousLinking(candidates);
        // Only one user uses this email, auto-link
        if (candidates.length === 1) return this.linkToOAuthUser(
            candidates[0],
            provider,
            providerAccountId,
            emailAddress,
            emailVerified
        );
        // User DNE, create one
        return this.createUserWithOAuth(
            provider,
            providerAccountId,
            emailAddress,
            emailVerified
        )
    }

    private async resolveUserByVerifiedEmailAddress(emailAddress?: string, emailVerified?: boolean): Promise<User[]> {
        return emailAddress && emailVerified
            ? await this.userReadModel.findUsersByVerifiedOAuthEmailAddress(emailAddress)
            : [];
    }

    private async handleAmbiguousLinking(users: User[]): Promise<LoginResult> {
        const allowedProviders = this.extractAllowedProviders(users);
        const linkSession = await this.linkSessionService.createLinkSession(allowedProviders);
        return { type: "PENDING_LINK", linkSession }
    }

    private async linkToOAuthUser(
        user: User,
        provider: string,
        providerAccountId: string,
        emailAddress?: string,
        emailVerified?: boolean
    ): Promise<LoginResult> {
        user.addOAuthAccount({
            identity: {
                provider,
                providerAccountId
            },
            emailAddress,
            emailVerified
        });
        await this.userRepository.update(user);
        return await this.finalizeLogin(user.id);
    }

    private async createUserWithOAuth(
        provider: string,
        providerAccountId: string,
        emailAddress?: string,
        emailVerified?: boolean
    ): Promise<LoginResult> {
        const user = User.create({
            profile: {
                username: UsernameGenerator.new(),
            },
            auth: {
                type: "oauth",
                accounts: [{
                    identity: {
                        provider,
                        providerAccountId
                    },
                    emailAddress,
                    emailVerified
                }]
            }
        })
        await this.userRepository.create(user);
        return await this.finalizeLogin(user.id);
    }

    private extractAllowedProviders(users: User[]): string[] {
        const providers = new Set<string>();
        for (const u of users) {
            for (const oa of u.oauthAccounts) {
                providers.add(oa.provider);
            }
        }
        return [ ...providers ]
    }

    private async finalizeLogin(userId: string): Promise<LoginResult> {
        return {
            type: "SUCCESS",
            userId,
            session: await this.sessionService.createSession(userId)
        };
    }
}