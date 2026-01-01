import { RedisClient } from "./redis.client";

export class RedisConnection {
    constructor(private readonly client: RedisClient) {}

    async set(...args: Parameters<RedisClient["set"]>): Promise<ReturnType<typeof this.client.set>> {
        return await this.client.set(...args);
    }

    async get(...args: Parameters<RedisClient["get"]>): Promise<ReturnType<typeof this.client.get>> {
        return await this.client.get(...args);
    }

    async del(...args: Parameters<RedisClient["del"]>): Promise<ReturnType<typeof this.client.del>> {
        return await this.client.del(...args);
    }
}