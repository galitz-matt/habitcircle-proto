import { DomainError } from "@lib/errors";

export class HabitNameInvariants {
    static enforce(habitName: string): void {
        this.ensureValidLength(habitName);
    }

    static ensureValidLength(habitName: string): void {
        if (habitName.length < 2 || habitName.length > 50) {
            throw new DomainError("Habit name must be between 2 and 50 characters long.");
        }
    }
}