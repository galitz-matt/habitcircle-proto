import { IdGenerator } from "@/lib/utils";
import { AuthenticationReadModel } from "../read-models/authentication.read-model";
import { HashingService } from "./hashing.service";
import { LoginWithCredentialsResult } from "../dtos/results/login-with-credentials.result";
import { Session } from "../models/session.model"
import { SessionRepository } from "../repositories/session.repository";
import { ResolveSessionResult } from "../dtos/results/resolve-session.result";
import { InvalidateSessionTokenResult } from "../dtos/results/invalidate-session-token.result";

const TTL = 60 * 60 * 24

export class AuthenticationService {

    constructor(
        private readonly authReadModel: AuthenticationReadModel,
        private readonly hashingService: HashingService,
        private readonly sessionRepo: SessionRepository
    ) {}

    async loginWithCredentials(username: string, password: string): Promise<LoginWithCredentialsResult> {
        const credentials = await this.authReadModel.findAuthenticationCredentialsByUsername(username);
        if (!credentials) {
            return { type: "InvalidCredentials" };
        }

        const verified = await this.hashingService.compare(password, credentials.hashedPassword);
        if (!verified) {
            return { type: "InvalidCredentials" };
        }

        const session = this.generateSession(credentials.userId);
        await this.sessionRepo.create(session, TTL)

        return {
            type: "Success",
            sessionToken: session.token
        }
    }

    async resolveSession(token: string): Promise<ResolveSessionResult> {
        const session = await this.sessionRepo.findByToken(token);
        if (!session) {
            return { type: "InvalidToken" };
        }

        return { type: "Success", userId: session.userId };
    }

    async invalidateSessionToken(token: string): Promise<InvalidateSessionTokenResult> {
        const invalidated = await this.sessionRepo.delete(token);
        return invalidated
            ? { type: "Success" }
            : { type: "InvalidToken" };
    }

    private generateSession(userId: string): Session {
        const issuedAt = new Date();
        const expiresAt = new Date(issuedAt.getTime() + TTL * 1000)

        return {
            token: IdGenerator.new(),
            userId: userId,
            issuedAt: issuedAt.toISOString(),
            expiresAt: expiresAt.toISOString(),
        }
    }
}