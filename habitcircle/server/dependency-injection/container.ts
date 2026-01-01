import { container } from "tsyringe";
import { CircleRepository } from "@/server/application/repositories/circle.repository";
import { UserRepository } from "@/server/application/repositories/user.repository";
import { CirclePrismaRepository } from "@/server/infra/prisma/repositories/circle.prisma-repository";
import { UserPrismaRepository } from "@/server/infra/prisma/repositories/user.prisma-repository";
import { PrismaClient } from "@/prisma/generated";
import { AuthenticationReadModel } from "../application/read-models/authentication.read-model";
import { AuthenticationPrismaReadModel } from "../infra/prisma/read-models/authentication.prisma-read-model";
import { HashingService } from "@/server/application/services/hashing.service";
import { BcryptHashingService } from "@/server/infra/services/bcrypt-hashing.service";
import { SessionRepository } from "../application/repositories/session.repository";
import { SessionRedisRepository } from "../infra/redis/repositories/session.redis-repository";
import { AuthenticationService } from "../application/services/authentication.service";
import { UserReadModel } from "../application/read-models/user.read-model";
import { UserPrismaReadModel } from "../infra/prisma/read-models/user.prisma-read-model";
import { LinkSessionRepository } from "../application/repositories/link-session.repository";
import { LinkSessionRedisRepository } from "../infra/redis/repositories/link-session.redis-repository";

const saltRounds = Number(process.env.SALT_ROUNDS);

// SERVICES
container.register<HashingService>("HashingService", { useValue: new BcryptHashingService(saltRounds) });

// READ MODELS
container.register<AuthenticationReadModel>("AuthenticationReadModel", { useClass: AuthenticationPrismaReadModel })
container.register<UserReadModel>("UserReadModel", { useClass: UserPrismaReadModel })

// WRITE MODELS


// REPOSITORIES
container.register<UserRepository>("UserRepository", { useClass: UserPrismaRepository });
container.register<LinkSessionRepository>("LinkSessionRepository", { useClass: LinkSessionRedisRepository });
container.register<SessionRepository>("SessionRepository", { useClass: SessionRedisRepository });


// EXTERNALS
container.registerInstance(PrismaClient, new PrismaClient());

export { container };
