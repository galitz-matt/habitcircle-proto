import type { HabitDto } from "@/server/application/dtos/habit.dto";
import type { CircleDto } from "../dtos/circle.dto";

export type RegisterCircleCommand = {
    circleName: string;
    ownerId: string;
    memberIds: string[];
    habitDtos: HabitDto[]
}

export type RegisterCircleResult = {
    circle: CircleDto
}
