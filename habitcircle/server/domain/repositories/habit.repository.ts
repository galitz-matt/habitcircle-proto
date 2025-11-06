import { Habit } from "../entities/habit.entity";

export interface HabitRepository {
    findById(id: string): Promise<Habit>;
    findByCircleId(circleId: string): Promise<Habit[]>;
    findAll(): Promise<Habit[]>;
    save(habit: Habit): Promise<void>;
    delete(id: string): Promise<void>;
}