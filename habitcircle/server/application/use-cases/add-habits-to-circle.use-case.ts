import type { HabitTemplate } from "@/server/application/dtos/habit.dto";
import { CircleDto } from "../dtos/circle.dto";

export type AddHabitsToCircleCommand = {
    circleId: string;
    toAddHabits: HabitTemplate[]
}

export type AddHabitsToCircleResult = {
    circle: CircleDto
}