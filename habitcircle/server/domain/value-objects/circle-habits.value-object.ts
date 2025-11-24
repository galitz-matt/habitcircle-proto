import { Habit } from "../entities/habit.entity";
import { CircleHabitsInvariants } from "../invariants/circle-habits.invariant";

export class CircleHabits {
    private constructor(
        readonly habits: Habit[]
    ) {
        const clone = [...habits];
        Object.freeze(clone);
        this.habits = clone;
        Object.freeze(this);
    }

    static create(habits: Habit[]): CircleHabits {
        CircleHabitsInvariants.enforce(habits);
        return new CircleHabits(habits);
    }

    getAll(): Habit[] {
        return [...this.habits];
    }

    add(habit: Habit): CircleHabits {
        const updatedHabits = [...this.habits, habit];
        return CircleHabits.create(updatedHabits);
    }

    addMany(habits: Habit[]): CircleHabits {
        const updatedHabits = [...this.habits, ...habits];
        return CircleHabits.create(updatedHabits)
    }

    containsById(habitId: string): boolean {
        return this.habits.some(h => h.id === habitId);
    }

    remove(habit: Habit): CircleHabits {
        const updatedHabits = this.habits.filter(h => !h.equals(habit));
        return CircleHabits.create(updatedHabits);
    }

    removeMany(habits: Habit[]): CircleHabits {
        const updatedHabits = this.habits.filter(
            habit => !habits.some(h => h.equals(habit))
        );
        return CircleHabits.create(updatedHabits);
    }

    removeManyById(habitIds: string[]): CircleHabits {
        const updatedHabits = this.habits.filter(
            h => !habitIds.some(id => h.id === id)
        );
        return CircleHabits.create(updatedHabits);
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
        return CircleHabits.create(habits);
    }
}