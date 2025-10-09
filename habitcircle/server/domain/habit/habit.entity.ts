import { IdGenerator } from "@lib/utils";

export class Habit {
    private constructor(
        readonly id: string,
        readonly createdAt: Date,
        readonly name: string,
        readonly circleId: string,
    ) {}

    static create(name: string, circleId: string): Habit {
        if (!name.trim()) throw new Error("Habit name cannot be empty");

        return new Habit(IdGenerator.new(), new Date(), name, circleId);
    }

    static rehydrate(
        id: string,
        createdAt: Date,
        name: string,
        circleId: string
    ): Habit {
        /* Used exclusively by repositories to reconstitue from persistence */
        return new Habit(id, createdAt, name, circleId);
    }
}