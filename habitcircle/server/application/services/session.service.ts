import { InvalidateSessionTokenResult } from "../dtos/results/invalidate-session-token.result";
import { ResolveSessionResult } from "../dtos/results/resolve-session.result";
import { RngError } from "../errors/rng.error";
import { Session } from "../models/session.model"
import { SessionRepository } from "../repositories/session.repository";
import { TokenService } from "./token.service";

const SESSION_TTL_SECONDS = 60 * 60 * 24

export class SessionService {
    constructor(
        private readonly sessionRepo: SessionRepository
    ) {}

    async createSession(userId: string): Promise<Session> {
        for (let i = 0; i < 5; i++) {
            const session = this.buildSession(userId);
            const result = await this.sessionRepo.create(session, SESSION_TTL_SECONDS);
            switch(result.type) {
                case "CREATED": return session;
                case "ALREADY_EXISTS": continue;
                default: throw new Error(`Unexpected create result: ${result}`);
            }
        }
        throw new RngError("Token collision persisted after 5 iterations, check RNG");
    }

    async resolveSession(token: string): Promise<ResolveSessionResult> {
        const result = await this.sessionRepo.findByToken(token);
        if (result.type == "FOUND") {
            return { type: "SUCCESS", userId: result.session.userId };
        }
        return { type: "INVALID_TOKEN" };
    }

    async invalidateSessionToken(token: string): Promise<InvalidateSessionTokenResult> {
        const invalidated = await this.sessionRepo.delete(token);
        return invalidated
            ? { type: "SUCCESS" }
            : { type: "INVALID_TOKEN" };
    }

    private buildSession(userId: string): Session {
        const now = new Date();
        return {
            token: TokenService.generateToken(),
            userId,
            issuedAt: now.toISOString(),
        };
    }
}