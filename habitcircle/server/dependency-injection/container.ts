import { container } from "tsyringe";
import { UserRepository } from "@/server/application/repositories/user.repository";
import { UserPrismaRepository } from "@/server/infra/prisma/repositories/user.prisma-repository";
import { PrismaClient } from "@/prisma/generated";
import { AuthenticationReadModel } from "../application/read-models/authentication.read-model";
import { AuthenticationPrismaReadModel } from "../infra/prisma/read-models/authentication.prisma-read-model";
import { HashingService } from "@/server/application/services/hashing.service";
import { BcryptHashingService } from "@/server/infra/services/bcrypt-hashing.service";
import { SessionRepository } from "../application/repositories/session.repository";
import { SessionRedisRepository } from "../infra/redis/repositories/session.redis-repository";
import { UserReadModel } from "../application/read-models/user.read-model";
import { UserPrismaReadModel } from "../infra/prisma/read-models/user.prisma-read-model";
import { LinkSessionRepository } from "../application/repositories/link-session.repository";
import { LinkSessionRedisRepository } from "../infra/redis/repositories/link-session.redis-repository";
import { RedisConnection } from "../infra/redis/redis.connection";
import { createRedisClient } from "../infra/redis/redis.client";
import { LinkSessionService } from "../application/services/link-session.service";
import { SessionService } from "../application/services/session.service";

const saltRounds = Number(process.env.SALT_ROUNDS);

// SERVICES
container.register<HashingService>("HashingService", { useValue: new BcryptHashingService(saltRounds) });
container.register<LinkSessionService>("LinkSessionService", { useClass: LinkSessionService });
container.register<SessionService>("SessionService", { useClass: SessionService });

// READ MODELS
container.register<AuthenticationReadModel>("AuthenticationReadModel", { useClass: AuthenticationPrismaReadModel })
container.register<UserReadModel>("UserReadModel", { useClass: UserPrismaReadModel })

// WRITE MODELS


// REPOSITORIES
container.register<UserRepository>("UserRepository", { useClass: UserPrismaRepository });
container.register<LinkSessionRepository>("LinkSessionRepository", { useClass: LinkSessionRedisRepository });
container.register<SessionRepository>("SessionRepository", { useClass: SessionRedisRepository });


// EXTERNALS
const redisClient = createRedisClient();
container.registerInstance(RedisConnection, new RedisConnection(redisClient))
container.registerInstance(PrismaClient, new PrismaClient());

export { container };
