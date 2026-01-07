import { StringUtils } from "@/server/lib/utils";
import { CircleNameInvariants } from "@/server/domain/invariants/circle-name.invariant";

export class CircleName {
    private constructor(
        readonly value: string
    ) {
        Object.freeze(this);
    }

    static create(value: string): CircleName {
        const normalized = StringUtils.normalize(value);
        CircleNameInvariants.enforce(normalized);
        return new CircleName(normalized);
    }

    toString() {
        return this.value;
    }

    equals(other: CircleName) {
        return !!other && this.value === other.value;
    }

    static rehydrate(value: string) {
        CircleNameInvariants.enforce(value);
        return new CircleName(value);
    }
}