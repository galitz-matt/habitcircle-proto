import type { HabitTemplate } from "@/lib/types";

export type AddHabitsCommand = {
    circleId: string;
    habitTemplates: HabitTemplate[]
}

export type AddHabitsResult = {
    result: boolean
}