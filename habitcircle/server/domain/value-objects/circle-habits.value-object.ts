import { Habit } from "../entities/habit.entity";
import { CircleHabitsInvariants } from "../invariants/circle-habits.invariant";

export class CircleHabits {
    private constructor(
        readonly habits: Map<string, Habit>
    ) {
        // NOTE: Habit is an Entity, so its internal state is mutable.
        // CircleHabits is a Value Object, so its *collection* is immutable.
        Object.freeze(this.habits);
        Object.freeze(this);
    }

    static create(habits: Habit[]): CircleHabits {
        CircleHabitsInvariants.enforce(habits);
        return new CircleHabits(
            CircleHabits.toMap(habits)
        );
    }

    getAll(): Habit[] {
        return [...this.habits.values()];
    }

    add(habit: Habit): CircleHabits {
        return this.addMany([habit]);
    }

    addMany(habits: Habit[]): CircleHabits {
        return new CircleHabits(
            new Map([
                ...this.habits,
                ...CircleHabits.toMap(habits)
            ])
        );
    }

    containsById(id: string): boolean {
        return this.habits.has(id);
    }

    remove(habitId: string): CircleHabits {
        return this.removeMany([habitId]);
    }

    removeMany(habitIds: string[]): CircleHabits {
        const clone = new Map(this.habits);
        for (const id of habitIds)
            clone.delete(id);
        return new CircleHabits(clone);
    }

    static rehydrate(habits: Habit[]): CircleHabits {
        return CircleHabits.create(habits);
    }

    private static toMap(habits: Habit[]): Map<string, Habit> {
        return new Map(
            habits.map(h => [h.id, h])
        );
    }
}