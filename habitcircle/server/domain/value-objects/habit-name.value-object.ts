import { StringUtils } from "@/lib/utils";
import { HabitNameInvariants } from "../invariants/habit-name.invariant";

export class HabitName {
    private constructor(
        readonly value: string
    ) {
        Object.freeze(this);
    }

    static create(name: string): HabitName {
        const normalized = StringUtils.normalize(name);
        HabitNameInvariants.enforce(normalized);
        return new HabitName(normalized);
    }

    equals(other: HabitName): boolean {
        return !!other && this.value === other.value;
    }

    static rehydrate(name: string): HabitName {
        return HabitName.create(name);
    }

    toString(): string {
        return this.value;
    }

}