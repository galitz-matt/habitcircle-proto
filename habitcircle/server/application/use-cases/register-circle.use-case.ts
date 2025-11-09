import type { HabitTemplate } from "@/server/application/dtos/habit/habit-template.dto";

export type RegisterCircleCommand = {
    circleName: string;
    ownerId: string;
    memberIds: string[];
    habitTemplates: HabitTemplate[]
}

export type RegisterCircleResult = {
    circleId: string;
    name: string;
}
