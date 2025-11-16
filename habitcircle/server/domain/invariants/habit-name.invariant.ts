import { NAME_PATTERN } from "@/lib/constants";
import { DomainError } from "@/lib/errors";

export class HabitNameInvariants {
    static enforce(habitName: string): void {
        this.ensureValidLength(habitName);
        this.ensureValidCharacters(habitName);
    }

    static ensureValidLength(habitName: string): void {
        if (habitName.length < 2 || habitName.length > 50) {
            throw new DomainError("Habit name must be between 2 and 50 characters long.");
        }
    }

    static ensureValidCharacters(habitName: string): void {
        if (!NAME_PATTERN.test(habitName)) {
            throw new DomainError("Habit name contains invalid characters");
        }
    }
}