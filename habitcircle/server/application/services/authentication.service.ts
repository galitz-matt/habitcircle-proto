import { IdGenerator } from "@/lib/utils";
import { AuthenticationReadModel } from "../read-models/authentication.read-model";
import { HashingService } from "./hashing.service";
import { LoginWithCredentialsResult } from "../dtos/results/login-with-credentials.result";
import { Session } from "../models/session.model"
import { SessionRepository } from "../repositories/session.repository";
import { VerifySessionTokenResult } from "../dtos/results/verify-session-token.result";
import { InvalidateSessionTokenResult } from "../dtos/results/invalidate-session-token.result";

export class AuthenticationService {
    readonly TWENTY_FOUR_HOURS = 1000 * 60 * 60 * 60 * 24
    readonly TTL = 60 * 60 * 24

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
        await this.sessionRepo.create(session, this.TTL)

        return {
            type: "Success",
            sessionToken: session.token
        }
    }

    async verifySessionToken(token: string): Promise<VerifySessionTokenResult> {
        const session = await this.sessionRepo.findByToken(token);
        if (!session) {
            return { type: "InvalidToken" };
        }

        const currentDate = new Date();
        const tokenExpiration = new Date(session.expiresAt);
        if (tokenExpiration < currentDate) {
            return { type: "InvalidToken" };
        }

        return { type: "Success" };
    }

    async invalidateSessionToken(token: string): Promise<InvalidateSessionTokenResult> {
        const deleted = await this.sessionRepo.delete(token);
        if (deleted == 0) {
            return { type: "TokenDoesNotExist" };
        }
        return { type: "Success" }
    }

    private generateSession(userId: string): Session {
        const issuedAt = new Date();
        const expiresAt = new Date(issuedAt.getTime() + this.TWENTY_FOUR_HOURS)

        return {
            token: IdGenerator.new(),
            userId: userId,
            issuedAt: issuedAt.toISOString(),
            expiresAt: expiresAt.toISOString(),
        }
    }
}