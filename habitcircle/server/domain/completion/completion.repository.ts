import { Completion } from "./completion";

export interface CompletionRepository {
    findByUserAndHabit(userId: string, habitId: string): Promise<Completion | null>
    findByUserId(userId: string): Promise<Completion[] | null>;
    findByHabitId(habitId: string): Promise<Completion[] | null>;
    save(completion: Completion): Promise<void>;
    delete(id: string): Promise<void>;
}