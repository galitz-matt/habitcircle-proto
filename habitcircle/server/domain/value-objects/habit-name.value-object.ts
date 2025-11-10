import { StringUtils } from "@/lib/utils";
import { HabitNameInvariants } from "../invariants/habit-name.invariant";
import { ValueObject } from "./value-object.base";

export class HabitName extends ValueObject<HabitName> {
    private constructor(
        readonly value: string
    ) { super() }

    static create(value: string): HabitName {
        const normalized = StringUtils.normalize(value);
        HabitNameInvariants.enforce(normalized);
        return new HabitName(normalized);
    }

    equals(other: HabitName): boolean {
        return this.value === other.value;
    }

    static rehydrate(value: string): HabitName {
        return new HabitName(value);
    }

    toString(): string {
        return this.value;
    }

}