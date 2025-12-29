import { ResolveLinkSessionResult } from "../dtos/results/resolve-link-session.result";
import { RngError } from "../errors/rng.error";
import { LinkSession } from "../models/link-session.model";
import { LinkSessionRepository } from "../repositories/link-session.repository";
import { TokenService } from "./token.service";

const LINKING_TTL_SECONDS = 60 * 60 * 0.25

export class LinkSessionService {
    constructor(
        private readonly linkSessionRepo: LinkSessionRepository,
    ) {}

    async createLinkSession(allowedProviders: string[]): Promise<LinkSession> {
        for (let i = 0; i < 5; i++) {
            const linkSession = this.buildLinkSession(allowedProviders);
            const result = await this.linkSessionRepo.create(linkSession, LINKING_TTL_SECONDS);
            switch (result.type) {
                case "CREATED": return linkSession;
                case "ALREADY_EXISTS": continue;
                default: throw new Error(`Unexpected create result: ${JSON.stringify(result)}`);
            }
        }
        throw new RngError(`Token collision persisted after 5 iterations, check RNG`);
    }

    async resolveLinkSession(token: string): Promise<ResolveLinkSessionResult> {
        const result = await this.linkSessionRepo.findByToken(token);
        return result.type === "FOUND"
            ? {
                type: "SUCCESS",
                allowedProviders: result.linkSession.allowedProviders
            }
            : { type: "NOT_FOUND" };
    }

    private buildLinkSession(allowedProviders: string[]): LinkSession {
        const now = new Date();
        return {
            token: TokenService.generateToken(),
            allowedProviders: [ ...new Set(allowedProviders) ],
            issuedAt: now.toISOString(),
        };
    }
}