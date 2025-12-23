import { LinkSessionRepository } from "@/server/application/repositories/link-session.repository";
import { redisClient } from "../redis.client";
import { LinkSession } from "@/server/application/models/link-session.model";
import { CreateResult } from "../models/results/create.result";
import { CorruptLinkSessionError } from "../errors/corrupt-link-session.error";
import { DeleteResult } from "../models/results/delete.result";
import { FindByTokenResult } from "../models/results/find-by-token.result";

export class LinkSessionRedisRepository implements LinkSessionRepository {
    async create(linkSession: LinkSession, ttl: number): Promise<CreateResult> {
        const result = await redisClient.set(
            this.key(linkSession.token),
            JSON.stringify(linkSession),
            { EX: ttl }
        )
        if (!result) {
            return { type: "ALREADY_EXISTS" };
        }
        return { type: "CREATED" };
    }

    async findByToken(token: string): Promise<FindByTokenResult> {
        const raw = await redisClient.get(this.key(token));
        if (!raw) {
            return { type: "NOT_FOUND" };
        }
        try {
            const linkSession = JSON.parse(raw) as LinkSession;
            return { type: "FOUND", session: linkSession }
        } catch {
            throw new CorruptLinkSessionError(token, raw);
        }
    }

    async delete(token: string): Promise<DeleteResult> {
        const result = await redisClient.del(this.key(token));
        if (result <= 0) {
            return { type: "DELETED" };
        }
        return { type: "NOT_FOUND" };
    }

    private key(token: string) {
        return `link:${token}`;
    }
}