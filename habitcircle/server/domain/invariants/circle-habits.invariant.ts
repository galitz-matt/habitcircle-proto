import { Habit } from "@/server/domain/entities/habit.entity";
import { DomainError } from "@/server/lib/errors";

export class CircleHabitsInvariants {
    static enforce(habits: Habit[]): void {
        this.ensureNoDuplicateIds(habits);
        this.ensureNoCrossCircleHabits(habits);
    }

    static ensureNoDuplicateIds(habits: Habit[]): void {
        const ids = new Set<string>();
        for (const habit of habits)
            ids.add(habit.id);

        if (ids.size !== habits.length)
            throw new DomainError("CircleHabits cannot contain duplicate ids");
    }

    static ensureNoCrossCircleHabits(habits: Habit[]): void {
        const circleIds = new Set<string>();
        for (const habit of habits)
            circleIds.add(habit.circleId);

        if (circleIds.size > 1)
            throw new DomainError("CircleHabits cannot contain cross-circle habits");
    }   
}