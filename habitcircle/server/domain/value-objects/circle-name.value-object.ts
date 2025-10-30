import { StringUtils } from "@/lib/utils";
import { CircleNameInvariants } from "../invariants/circle-name.invariant";
import { ValueObject } from "./value-object.base";

export class CircleName extends ValueObject<CircleName> {
    private constructor(
        readonly value: string
    ) { super() }

    static create(value: string) {
        const normalized = StringUtils.normalize(value);
        CircleNameInvariants.enforce(normalized);
        return new CircleName(normalized);
    }

    get(): string {
        return this.value;
    }

    toString() {
        return this.value;
    }

    equals(other: CircleName) {
        return this.value === other.value;
    }

    static rehydrate(value: string) {
        return new CircleName(value);
    }
}