import { Habit } from "@/server/domain/entities/habit.entity";
import { Habit as HabitRecord } from "@/prisma/generated"
import { HabitPrismaDto } from "@/server/infra/db/prisma/dtos/habit-prisma.dto"
import { HabitName } from "@/server/domain/value-objects/habit-name.value-object";

export class HabitPrismaMapper {
    static toDomain(record: HabitRecord): Habit {
        return Habit.rehydrate(
            record.id,
            record.createdAt,
            HabitName.rehydrate(
                record.name
            ),
            record.circleId
        );
    }

    static toPersistence(habit: Habit): HabitPrismaDto {
        return {
            id: habit.id,
            name: habit.getName(),
        }
    }
}