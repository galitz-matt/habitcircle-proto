import type { Habit } from "@/server/domain/entities/habit.entity";
import type { HabitDto } from "../dtos/habit.dto";

export class HabitDtoMapper {
    static toDto(habit: Habit): HabitDto {
        return {
            id: habit.id,
            name: habit.getName(),
            createdAt: habit.createdAt.toISOString(),
            circleId: habit.circleId
        }
    }
}