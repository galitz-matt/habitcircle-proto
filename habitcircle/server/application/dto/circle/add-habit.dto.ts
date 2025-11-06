import type { HabitTemplate } from "@/lib/types";

export type AddHabitCommand = {
    circleId: string;
    habitTemplate: HabitTemplate
}

export type AddHabitResult = {
    result: boolean
}