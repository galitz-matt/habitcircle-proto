import { Habit } from "./habit";

export interface HabitRepository {
    findById(id: string): Promise<Habit | null>;
    findByCircleId(circleId: string): Promise<Habit[]>;
    save(habit: Habit): Promise<void>;
    delete(id: string): Promise<void>;
}