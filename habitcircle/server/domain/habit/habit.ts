export class Habit {
    private constructor(
        readonly id: string,
        readonly name: string,
        readonly circleId: string,
        readonly createdAt: Date
    ) {}

    static create(name: string, circleId: string): Habit {
        if (!name.trim()) throw new Error("Habit name cannot be empty");

        const habitId = crypto.randomUUID();
        return new Habit(habitId, name, circleId, new Date());
    }
}