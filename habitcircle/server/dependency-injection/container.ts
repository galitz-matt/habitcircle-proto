import { container } from "tsyringe";
import { CircleRepository } from "@/server/application/repositories/circle.repository";
import { UserRepository } from "@/server/application/repositories/user.repository";
import { CirclePrismaRepository } from "@/server/infra/db/prisma/repositories/circle.prisma-repository";
import { UserPrismaRepository } from "@/server/infra/db/prisma/repositories/user.prisma-repository";

container.register<CircleRepository>("CircleRepository", { useClass: CirclePrismaRepository });
container.register<UserRepository>("UserRepository", { useClass: UserPrismaRepository });

export { container };