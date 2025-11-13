import { StringUtils } from "@/lib/utils";
import { BiographyInvariants } from "../invariants/biography.invariant";

export class Biography {
    private constructor(
        readonly value: string
    ) { }

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