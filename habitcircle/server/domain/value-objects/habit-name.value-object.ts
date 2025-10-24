import { StringUtils, HabitNameInvariants } from "@lib/utils";

export class HabitName {
    private constructor(
        readonly value: string
    ) {}

    static create(value: string) {
        const normalized = StringUtils.normalize(value);
        if (!HabitNameInvariants.isValidLength(normalized)) throw new Error("Habit name must be between 2 and 50 characters");

        return new HabitName(value);
    }

    toString(): string {
        return this.value;
    }

    equals(other: HabitName) {
        return this.value === other.value;
    }

    static rehydrate(value: string) {
        return new HabitName(value);
    }
}