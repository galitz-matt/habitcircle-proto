import { Habit } from "@/server/domain/entities/habit.entity";
import { DomainError } from "@/lib/errors";

export class CircleHabitsInvariants {
    static enforce(habits: Habit[]): void {
        this.ensureNoDuplicates(habits);
    }

    static ensureNoDuplicates(habits: Habit[]): void {
        const habitSet = new Set(habits);
        if (habits.length !== habitSet.size) {
            throw new DomainError("Found duplicate habits.")
        }
    }
}