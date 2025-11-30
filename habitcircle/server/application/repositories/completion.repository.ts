import type { Completion } from "@/server/domain/entities/completion.entity";

export interface CompletionRepository {
    findByUserHabitAndDate(userId: string, habitId: string, completedAt: Date): Promise<Completion | null>
    findByUserAndHabit(userId: string, habitId: string): Promise<Completion[]>
    findByUserId(userId: string): Promise<Completion[]>;
    findByHabitId(habitId: string): Promise<Completion[]>;
    create(completion: Completion): Promise<void>;
    update(completion: Completion): Promise<void>;
    delete(completion: Completion): Promise<void>;
}