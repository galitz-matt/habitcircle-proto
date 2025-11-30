import type { Habit } from "@/server/domain/entities/habit.entity";

export interface HabitRepository {
    findById(id: string): Promise<Habit | null>;
    findByCircleId(circleId: string): Promise<Habit[]>;
    create(habit: Habit): Promise<void>;
    update(habit: Habit): Promise<void>;
    delete(habit: Habit): Promise<void>;
}