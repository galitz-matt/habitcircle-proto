import { StringUtils } from "@/lib/utils";
import { ValueObject } from "./value-object.base";
import { BiographyInvariants } from "../invariants/biography.invariant";

export class Biography extends ValueObject<Biography> {
    private constructor(
        readonly value: string
    ) { super() }

    static create(value: string): Biography {
        const normalized = StringUtils.normalize(value);
        BiographyInvariants.enforce(normalized);
        return new Biography(value);
    }

    equals(other: Biography): boolean {
        return !!other && this.value == other.value;
    }

    static rehydrate(value: string): Biography {
        return new Biography(value);
    }

    toString(): string {
        return this.value;
    }
}