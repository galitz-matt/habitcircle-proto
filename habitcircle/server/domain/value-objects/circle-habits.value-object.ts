import { Habit } from "../entities/habit.entity";
import { CircleHabitsInvariants } from "../invariants/circle-habits.invariant";
import { ValueObject } from "./value-object.base";

export class CircleHabits extends ValueObject<CircleHabits> {
    constructor(
        readonly habits: Habit[]
    ) { super() }

    static create(habits: Habit[]): CircleHabits {
        CircleHabitsInvariants.enforce(habits);
        return new CircleHabits(habits);
    }

    addHabit(habit: Habit): CircleHabits {
        const updatedHabits = [...this.habits, habit];
        CircleHabitsInvariants.enforce(updatedHabits);
        return new CircleHabits(updatedHabits);
    }

    removeHabit(habit: Habit): CircleHabits {
        const updatedHabits = this.habits.filter(h => h.id !== habit.id)
        CircleHabitsInvariants.enforce(updatedHabits);
        return new CircleHabits(updatedHabits);
    }

    toString(): string {
        let s = "{ "
        for (let i = 0; i < this.habits.length; i++) {
            const habit = this.habits[i];
            s += `${habit.name}`;
            if (i < this.habits.length - 1) {
                s += ", ";
            }
        }
        s += " }"
        return s
    }

    equals(other: CircleHabits): boolean {
        if (other.habits === this.habits) return true;
        if (other.habits.length != this.habits.length) return false;

        const thisIds = new Set(this.habits.map(h => h.id));
        const otherIds = new Set(other.habits.map(h => h.id));

        if (thisIds.size !== otherIds.size) return false;

        for (const id of thisIds) {
            if (!otherIds.has(id)) return false;
        }

        return true;
    }

    static rehydrate(habits: Habit[]): CircleHabits {
        return new CircleHabits(habits);
    }
}