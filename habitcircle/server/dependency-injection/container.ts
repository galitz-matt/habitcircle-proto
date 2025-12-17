import { container } from "tsyringe";
import { CircleRepository } from "@/server/application/repositories/circle.repository";
import { UserRepository } from "@/server/application/repositories/user.repository";
import { CirclePrismaRepository } from "@/server/infra/prisma/repositories/circle.prisma-repository";
import { UserPrismaRepository } from "@/server/infra/prisma/repositories/user.prisma-repository";
import { PrismaClient } from "@/prisma/generated";
import type { AuthenticationReadModel } from "../application/read-models/authentication.read-model";
import { AuthenticationPrismaReadModel } from "../infra/prisma/read-models/authentication.prisma-read-model";
import type { HashingService } from "@/server/application/services/hashing.service";
import { BcryptHashingService } from "@/server/infra/services/bcrypt-hashing.service";
import { SessionRepository } from "../application/repositories/session.repository";
import { SessionRedisRepository } from "../infra/redis/repositories/session.redis-repository";

const saltRounds = Number(process.env.SALT_ROUNDS);

container.register<AuthenticationReadModel>("AuthenticationReadModel", { useClass: AuthenticationPrismaReadModel })

container.register<CircleRepository>("CircleRepository", { useClass: CirclePrismaRepository });
container.register<UserRepository>("UserRepository", { useClass: UserPrismaRepository });
container.register<SessionRepository>("SessionRepository", { useClass: SessionRedisRepository });
container.register<HashingService>("HashingService", { useValue: new BcryptHashingService(saltRounds) });

container.registerInstance(PrismaClient, new PrismaClient());

export { container };
