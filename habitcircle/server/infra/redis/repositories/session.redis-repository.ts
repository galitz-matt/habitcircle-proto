import { SessionRepository } from "@/server/application/repositories/session.repository";
import { Session } from "@/server/application/models/session.model"
import { redisClient } from "../redis.client";

export class SessionRedisRepository implements SessionRepository {
    async create(session: Session, ttlSeconds: number): Promise<void> {
        await redisClient.set(
            this.key(session.token),
            JSON.stringify(session),
            { EX: ttlSeconds }
        );
    }

    async findByToken(sessionToken: string): Promise<Session | null> {
        const raw = await redisClient.get(this.key(sessionToken));
        return raw ? JSON.parse(raw) as Session : null;
    }

    async delete(sessionToken: string): Promise<boolean> {
        return await redisClient.del(this.key(sessionToken)) > 0;
    }

    private key(token: string) {
        return `session:${token}`
    }
}