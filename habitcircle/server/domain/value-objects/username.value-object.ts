import { StringUtils } from "@/lib/utils";
import { UsernameInvariants } from "../invariants/username.invariant";

export class Username {
    private constructor(
        readonly value: string,
    ) {
        Object.freeze(this);
    }

    static create(value: string): Username {
        const normalized = StringUtils.normalize(value);
        UsernameInvariants.enforce(normalized);
        return new Username(normalized);
    }

    toString(): string {
        return this.value;
    }

    static rehydrate(value: string): Username {
        UsernameInvariants.enforce(value);
        return new Username(value);
    } 
}