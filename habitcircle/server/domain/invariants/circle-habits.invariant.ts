import { Habit } from "@/server/domain/entities/habit.entity";
import { DomainError } from "@/lib/errors";

export class CircleHabitsInvariants {
    static enforce(habits: Set<Habit>): void {
        this.ensureNoDuplicateIds(habits);
        this.ensureNoCrossCircleHabits(habits);
    }

    static ensureNoDuplicateIds(habits: Set<Habit>): void {
        const ids = new Set<string>();
        for (const habit of habits)
            ids.add(habit.id);

        if (ids.size !== habits.size)
            throw new DomainError("CircleHabits cannot contain duplicate ids");
    }

    static ensureNoCrossCircleHabits(habits: Set<Habit>): void {
        const ids = new Set<string>();
        for (const habit of habits)
            ids.add(habit.id);

        if (ids.size !== 1)
            throw new DomainError("CircleHabits cannot contain cross-circle habits");
    }   
}