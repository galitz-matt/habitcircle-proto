import type { HabitTemplate } from "@/server/application/dtos/habit-template.dto";
import { CircleDto } from "@/server/application/dtos/circle.dto";

export type AddHabitsToCircleCommand = {
    circleId: string;
    toAddHabits: HabitTemplate[]
}

export type AddHabitsToCircleResult = {
    circle: CircleDto
}