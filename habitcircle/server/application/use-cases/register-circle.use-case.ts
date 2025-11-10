import type { HabitTemplate } from "@/server/application/dtos/habit-template.dto";
import type { CircleDto } from "../dtos/circle.dto";

export type RegisterCircleCommand = {
    circleName: string;
    ownerId: string;
    memberIds: string[];
    habitTemplates: HabitTemplate[]
}

export type RegisterCircleResult = {
    circle: CircleDto
}
