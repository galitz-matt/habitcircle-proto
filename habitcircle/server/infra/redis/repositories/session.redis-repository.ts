import { SessionRepository } from "@/server/application/repositories/session.repository";
import { Session } from "@/server/application/models/session.model"
import { redisClient } from "../redis.client";
import { CreateResult } from "../models/results/create.result";
import { DeleteResult } from "../models/results/delete.result";
import { CorruptSessionError } from "../errors/corrupt-session.error";
import { FindSessionByTokenResult } from "../models/results/find-by-token.result";

export class SessionRedisRepository implements SessionRepository {
    async create(session: Session, ttl: number): Promise<CreateResult> {
        const result = await redisClient.set(
            this.key(session.token),
            JSON.stringify(session),
            { EX: ttl, NX: true }
        )
        if (!result) {
            return { type: "ALREADY_EXISTS" };
        }
        return { type: "CREATED" }
    }

    async findByToken(token: string): Promise<FindSessionByTokenResult> {
        const raw = await redisClient.get(this.key(token));
        if (!raw) {
            return { type: "NOT_FOUND" };
        }
        try {
            const session = JSON.parse(raw) as Session;
            return { type: "FOUND", session: session };
        } catch {
            throw new CorruptSessionError(token, raw);
        }
    }

    async delete(sessionToken: string): Promise<DeleteResult> {
        const result = await redisClient.del(this.key(sessionToken));
        if (result <= 0) {
            return { type: "NOT_FOUND" };
        }
        return { type: "DELETED" };
    }

    private key(token: string) {
        return `session:${token}`
    }
}