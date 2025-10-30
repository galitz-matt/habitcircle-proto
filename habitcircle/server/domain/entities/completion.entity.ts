import { IdGenerator } from "@/lib/utils";

export class Completion {
    private constructor(
        readonly id: string,
        readonly createdAt: Date,
        readonly completedAt: Date,
        readonly userId: string,
        readonly habitId: string,
    ) {}

    static create(userId: string, habitId: string): Completion {
        if (!userId) throw new Error("UserID cannot be null");
        if (!habitId) throw new Error("HabitID cannot be null");

        const completedAt = new Date();
        completedAt.setHours(0, 0, 0, 0);

        return new Completion(IdGenerator.new(), new Date(), completedAt, userId, habitId);
    }

    static rehydrate(
        id: string,
        createdAt: Date,
        completedAt: Date,
        userId: string,
        habitId: string,
    ): Completion {
        /* Used exclusively by repositories to reconstitue from persistence */
        return new Completion(id, createdAt, completedAt, userId, habitId)
    }
}