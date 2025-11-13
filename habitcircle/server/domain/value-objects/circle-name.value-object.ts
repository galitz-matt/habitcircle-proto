import { StringUtils } from "@/lib/utils";
import { CircleNameInvariants } from "../invariants/circle-name.invariant";

export class CircleName {
    private constructor(
        readonly value: string
    ) {}

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
        return !!other && this.value === other.value;
    }

    static rehydrate(value: string) {
        return new CircleName(value);
    }
}