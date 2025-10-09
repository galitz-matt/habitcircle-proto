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

        const completionId = crypto.randomUUID();
        return new Completion(completionId, new Date(), userId, habitId);
    }
}