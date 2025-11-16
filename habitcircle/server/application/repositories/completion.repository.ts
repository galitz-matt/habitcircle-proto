import { Completion } from "@/server/domain/entities/completion.entity";

export interface CompletionRepository {
    findByUserHabitAndDate(userId: string, habitId: string, completedAt: Date): Promise<Completion>
    findByUserAndHabit(userId: string, habitId: string): Promise<Completion[]>
    findByUserId(userId: string): Promise<Completion[]>;
    findByHabitId(habitId: string): Promise<Completion[]>;
    findAll(): Promise<Completion[]>;
    save(completion: Completion): Promise<void>;
    delete(id: string): Promise<void>;
}