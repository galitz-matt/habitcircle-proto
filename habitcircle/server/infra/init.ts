import { container } from "@/server/dependency-injection/container"
import { RedisConnection } from "./redis/redis.connection"

export async function initInfra() {
    const redis = container.resolve(RedisConnection);
    await redis.connect();
}