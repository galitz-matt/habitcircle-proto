import { Habit } from "@/server/domain/entities/habit.entity";
import { Habit as HabitRecord } from "@/prisma/generated"
import { HabitPrimitive } from "@/server/infrastructure/db/dtos/habit-primitive.dto";

export class HabitPrismaMapper {
    static toDomain(record: HabitRecord): Habit {
        return Habit.rehydrate(
            record.id,
            record.createdAt,
            record.name,
            record.circleId
        );
    }

    static toPersistence(habit: Habit): HabitPrimitive {
        return {
            id: habit.id,
            createdAt: habit.createdAt,
            name: habit.getName(),
            circleId: habit.circleId
        }
    }
}