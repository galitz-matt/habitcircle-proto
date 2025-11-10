import type { HabitDto } from "../../dtos/habit.dto"

export type RenameHabitCommand = {
    name: string,
    habitId: string,
    circleId: string
}

export type RenameHabitResult = {
    habit: HabitDto
}