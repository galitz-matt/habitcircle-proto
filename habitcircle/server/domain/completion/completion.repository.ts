import { Completion } from "./completion.entity";

export interface CompletionRepository {
    findByUserAndHabit(userId: string, habitId: string): Promise<Completion | null>
    findByUserId(userId: string): Promise<Completion[]>;
    findByHabitId(habitId: string): Promise<Completion[]>;
    findAll(): Promise<Completion[]>;
    save(completion: Completion): Promise<void>;
    delete(id: string): Promise<void>;
}