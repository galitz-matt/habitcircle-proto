import { IdGenerator } from "@/lib/utils";
import { AuthenticationReadModel } from "../read-models/authentication.read-model";
import { HashingService } from "./hashing.service";
import { LoginWithCredentialsResult } from "../dtos/results/login.result";
import { Session } from "../models/session.model"
import { SessionRepository } from "../repositories/session.repository";

export class AuthenticationService {
    readonly TWENTY_FOUR_HOURS = 1000 * 60 * 60 * 60 * 24
    readonly TTL = 60 * 60 * 24

    constructor(
        private readonly authReadModel: AuthenticationReadModel,
        private readonly hashingService: HashingService,
        private readonly sessionRepository: SessionRepository
    ) {}

    async loginWithCredentials(username: string, password: string): Promise<LoginWithCredentialsResult> {
        const credentials = await this.authReadModel.findAuthenticationCredentialsByUsername(username);
        if (!credentials) return { type: "InvalidCredentials" };

        const verified = await this.hashingService.compare(password, credentials.hashedPassword);
        if (!verified) return { type: "InvalidCredentials" };

        const session = this.generateSession(credentials.userId);
        await this.sessionRepository.create(session, this.TTL)

        return {
            type: "Success",
            sessionToken: session.token
        }
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