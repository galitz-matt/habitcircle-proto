import { container } from "tsyringe";
import { CircleRepository } from "@/server/application/repositories/circle.repository";
import { UserRepository } from "@/server/application/repositories/user.repository";
import { HabitRepository } from "@/server/application/repositories/habit.repository";
import { CirclePrismaRepository } from "@/server/infrastructure/db/prisma/repositories/circle.prisma-repository";
import { UserPrismaRepository } from "@/server/infrastructure/db/prisma/repositories/user.prisma-repository";
import { HabitPrismaRepository } from "@/server/infrastructure/db/prisma/repositories/habit.prisma-repository";

container.register<CircleRepository>("CircleRepository", { useClass: CirclePrismaRepository });
container.register<UserRepository>("UserRepository", { useClass: UserPrismaRepository });
container.register<HabitRepository>("HabitRepository", { useClass: HabitPrismaRepository });

export { container };