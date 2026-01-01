import { createClient } from "redis"

export function createRedisClient() {
    const client = createClient({ url: process.env.REDIS_URL });
    client.on("error", (err) => {
        console.error("Redis Client Error", err)
    });
    return client;
}

export type RedisClient = ReturnType<typeof createClient>