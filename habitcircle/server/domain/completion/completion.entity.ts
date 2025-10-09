import { IdGenerator } from "@lib/utils";

export class Completion {
    private constructor(
        readonly id: string,
        readonly createdAt: Date,
        readonly userId: string,
        readonly habitId: string,
    ) {}

    static create(userId: string, habitId: string): Completion {
        if (!userId) throw new Error("UserID cannot be null");
        if (!habitId) throw new Error("HabitID cannot be null");

        return new Completion(IdGenerator.new(), new Date(), userId, habitId);
    }

    static rehydrate(
        id: string,
        createdAt: Date,
        userId: string,
        habitId: string,
    ): Completion {
        /* Used exclusively by repositories to reconstitue from persistence */
        return new Completion(id, createdAt, userId, habitId)
    }
}