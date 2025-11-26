import { Habit } from "../entities/habit.entity";
import { CircleHabitsInvariants } from "../invariants/circle-habits.invariant";

export class CircleHabits {
    private constructor(
        readonly habits: Set<Habit>
    ) {
        // NOTE: Habit is an Entity, so its internal state is mutable.
        // CircleHabits is a Value Object, so its *collection* is immutable.
        this.habits = new Set(habits)
        Object.freeze(this.habits);
        Object.freeze(this);
    }

    static create(habits: Set<Habit>): CircleHabits {
        CircleHabitsInvariants.enforce(habits);
        return new CircleHabits(habits);
    }

    getAll(): Habit[] {
        return [...this.habits];
    }

    add(habit: Habit): CircleHabits {
        return this.addMany([habit]);
    }

    addMany(habits: Habit[]): CircleHabits {
        const updatedHabits = new Set([...this.habits, ...habits]);
        return CircleHabits.create(updatedHabits);
    }

    containsById(id: string): boolean {
        for (const h of this.habits)
            if (h.id === id) return true;
        return false;
    }

    remove(habitId: string): CircleHabits {
        return this.removeMany([habitId]);
    }

    removeMany(habitIds: string[]): CircleHabits {
        const idsToRemove = new Set(habitIds);
        const updated = new Set<Habit>();

        for (const h of this.habits) {
            if (!idsToRemove.has(h.id))
                updated.add(h);
        }

        return CircleHabits.create(updated);
    }

    static rehydrate(habits: Set<Habit>): CircleHabits {
        return CircleHabits.create(habits);
    }
}