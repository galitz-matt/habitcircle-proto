import type { HabitTemplate } from "@/lib/types";

export type RegisterCircleCommand = {
    requestingUserId: string
    circleName: string;
    memberIds: string[];
    habitTemplates: HabitTemplate[]
}

export type RegisterCircleResult = {
    circleId: string;
    name: string;
}
