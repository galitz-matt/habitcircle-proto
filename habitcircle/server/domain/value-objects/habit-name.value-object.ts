import { StringUtils } from "@lib/utils";
import { HabitNameInvariants } from "../invariants/habit-name.invariant";
import { ValueObject } from "./value-object.base";

export class HabitName extends ValueObject<HabitName> {
    private constructor(
        readonly value: string
    ) { super() }

    static create(value: string) {
        const normalized = StringUtils.normalize(value);
        HabitNameInvariants.enforce(normalized);
        return new HabitName(normalized);
    }

    toString(): string {
        return this.value;
    }

    equals(other: HabitName) {
        return this.value === other.value;
    }

    static rehydrate(value: string) {
        return new HabitName(value);
    }
}