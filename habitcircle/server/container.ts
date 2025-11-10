import { container } from "tsyringe";
import { CircleRepository } from "@/server/domain/repositories/circle.repository";
import { UserRepository } from "@/server/domain/repositories/user.repository";
import { HabitRepository } from "@/server/domain/repositories/habit.repository";
import { CirclePrismaRepository } from "@/server/infrastructure/db/repositories/circle.prisma-repository";
import { UserPrismaRepository } from "@/server/infrastructure/db/repositories/user.prisma-repository";
import { HabitPrismaRepository } from "@/server/infrastructure/db/repositories/habit.prisma-repository";
import { CircleService } from "@/server/application/services/circle.service";
import { HabitService } from "./application/services/habit.service";
import { UserService } from "./application/services/user.service";
import { AuthenticationService } from "./application/services/authentication.service";

container.register<CircleRepository>("CircleRepository", { useClass: CirclePrismaRepository });
container.register<UserRepository>("UserRepository", { useClass: UserPrismaRepository });
container.register<HabitRepository>("HabitRepository", { useClass: HabitPrismaRepository });

container.register("AuthenticationService", { useClass: AuthenticationService })
container.register("CircleService", { useClass: CircleService });
container.register("HabitService", { useClass: HabitService })
container.register("UserService", { useClass: UserService })

export { container };