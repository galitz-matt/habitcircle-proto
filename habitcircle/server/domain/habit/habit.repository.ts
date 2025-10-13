import { Habit } from "./habit.entity";

export interface HabitRepository {
    findById(id: string): Promise<Habit | null>;
    findByCircleId(circleId: string): Promise<Habit[] | null>;
    save(habit: Habit): Promise<void>;
    delete(id: string): Promise<void>;
}