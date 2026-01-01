import { LinkSessionRepository } from "@/server/application/repositories/link-session.repository";
import { LinkSession } from "@/server/application/models/link-session.model";
import { CreateResult } from "../models/results/create.result";
import { CorruptLinkSessionError } from "../errors/corrupt-link-session.error";
import { DeleteResult } from "../models/results/delete.result";
import { FindLinkSessionByTokenResult } from "../models/results/find-by-token.result";
import { injectable, inject } from "tsyringe";
import { RedisConnection } from "../redis.connection";

@injectable()
export class LinkSessionRedisRepository implements LinkSessionRepository {
    constructor(
        @inject(RedisConnection)
        private readonly redis: RedisConnection
    ) {}

    async create(linkSession: LinkSession, ttl: number): Promise<CreateResult> {
        const result = await this.redis.set(
            this.key(linkSession.token),
            JSON.stringify(linkSession),
            { 
                expiration: { type: "EX", value: ttl }, 
                condition: "NX" 
            }
        )
        if (!result) {
            return { type: "ALREADY_EXISTS" };
        }
        return { type: "CREATED" };
    }

    async findByToken(token: string): Promise<FindLinkSessionByTokenResult> {
        const raw = await this.redis.get(this.key(token));
        if (!raw) {
            return { type: "NOT_FOUND" };
        }
        try {
            const linkSession = JSON.parse(raw) as LinkSession;
            return { type: "FOUND", linkSession: linkSession }
        } catch {
            throw new CorruptLinkSessionError(token, raw);
        }
    }

    async delete(token: string): Promise<DeleteResult> {
        const result = await this.redis.del(this.key(token));
        if (result <= 0) {
            return { type: "NOT_FOUND" };
        }
        return { type: "DELETED" };
    }

    private key(token: string) {
        return `link:${token}`;
    }
}