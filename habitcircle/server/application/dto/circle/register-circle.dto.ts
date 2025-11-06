import type { HabitTemplate } from "@/lib/types";

export type RegisterCircleCommand = {
    circleName: string;
    ownerId: string
    memberIds: string[];
    habitTemplates: HabitTemplate[]
}

export type RegisterCircleResult = {
    circleId: string;
    name: string;
}
