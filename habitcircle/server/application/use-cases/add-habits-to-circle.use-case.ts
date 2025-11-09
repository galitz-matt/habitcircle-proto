import type { HabitTemplate } from "@/server/application/dtos/habit/habit-template.dto";

export type AddHabitsToCircleCommand = {
    circleId: string;
    habitTemplates: HabitTemplate[]
}

export type AddHabitsToCircleResult = {
    result: boolean
}