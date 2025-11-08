import type { HabitTemplate } from "@/lib/types";

export type AddHabitsToCircleCommand = {
    circleId: string;
    habitTemplates: HabitTemplate[]
}

export type AddHabitsToCircleResult = {
    result: boolean
}