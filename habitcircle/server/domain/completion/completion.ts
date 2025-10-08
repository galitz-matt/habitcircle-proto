export class Completion {
    private constructor(
        readonly completionId: string,
        readonly userId: string,
        readonly habitId: string,
        readonly createdAt: Date
    ) {}

    static create(userId: string, habitId: string): Completion {
        if (!userId) throw new Error("UserID cannot be null");
        if (!habitId) throw new Error("HabitID cannot be null");

        const completionId = crypto.randomUUID();
        return new Completion(completionId, userId, habitId, new Date());
    }
}