import { StringUtils } from "@/server/lib/utils";
import { BiographyInvariants } from "../../invariants/biography.invariant";

export class Biography {
    private constructor(
        readonly value: string
    ) {
        Object.freeze(this);
    }

    static create(value: string): Biography {
        const normalized = StringUtils.normalize(value);
        BiographyInvariants.enforce(normalized);
        return new Biography(normalized);
    }

    static rehydrate(value: string): Biography {
        BiographyInvariants.enforce(value);
        return new Biography(value);
    }

    toString(): string {
        return this.value;
    }
}