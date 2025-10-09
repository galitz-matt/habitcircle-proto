export class Habit {
    private constructor(
        readonly id: string,
        readonly createdAt: Date,
        readonly name: string,
        readonly circleId: string,
    ) {}

    static create(name: string, circleId: string): Habit {
        if (!name.trim()) throw new Error("Habit name cannot be empty");

        const habitId = crypto.randomUUID();
        return new Habit(habitId, new Date(), name, circleId);
    }
}