import type { HabitDto } from "@/server/application/dtos/habit.dto";
import { CircleDto } from "../dtos/circle.dto";

export type AddHabitsToCircleCommand = {
    circleId: string;
    habitDtos: HabitDto[]
}

export type AddHabitsToCircleResult = {
    circle: CircleDto
}