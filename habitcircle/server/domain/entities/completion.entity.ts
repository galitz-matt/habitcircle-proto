import { IdGenerator } from "@/lib/utils";

export type CreateCompletionInput = {
    userId: string,
    habitId: string,
}

export class Completion {
    private constructor(
        private readonly _id: string,
        private _completedAt: Date,
        private readonly _userId: string,
        private readonly _habitId: string
    ) {}

    static create(userId: string, habitId: string): Completion {
        const completedAt = new Date();
        completedAt.setHours(0, 0, 0, 0);

        return new Completion(
            IdGenerator.new(),
            new Date(),
            userId,
            habitId
        )
    }

    static rehydrate(
        id: string,
        completedAt: Date,
        userId: string,
        habitId: string
    ): Completion {
        /* Used exclusively by repositories to reconstitue from persistence */
        return new Completion(
            id,
            completedAt,
            userId,
            habitId
        );
    }

}