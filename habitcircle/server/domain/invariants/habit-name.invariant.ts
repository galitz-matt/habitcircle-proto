import { DomainError } from "../errors/domain-error";

export class HabitNameInvariants {
    static enforce(habitName: string): void {
        this.ensureValidLength(habitName);
    }

    static ensureValidLength(habitName: string): void {
        if (2 > habitName.length && habitName.length >= 50) {
            throw new DomainError("Habit name must be between 2 and 50 characters long.");
        }
    }
}