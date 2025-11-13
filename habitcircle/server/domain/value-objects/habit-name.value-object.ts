import { StringUtils } from "@/lib/utils";
import { HabitNameInvariants } from "../invariants/habit-name.invariant";

export class HabitName {
    private constructor(
        readonly name: string
    ) {}

    static create(name: string): HabitName {
        const normalized = StringUtils.normalize(name);
        HabitNameInvariants.enforce(normalized);
        return new HabitName(normalized);
    }

    equals(other: HabitName): boolean {
        return !!other && this.name === other.name;
    }

    static rehydrate(name: string): HabitName {
        return new HabitName(name);
    }

    toString(): string {
        return this.name;
    }

}