import type { HabitTemplate } from "@/lib/types";

export type AddHabitsToCircleCommand = {
    requestingUserId: string;
    circleId: string;
    habitTemplates: HabitTemplate[]
}

export type AddHabitsToCircleResult = {
    result: boolean
}