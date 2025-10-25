import { StringUtils } from "@lib/utils";
import { UsernameInvariants } from "../invariants/username.invariant";
import { ValueObject } from "./value-object.base";

export class Username extends ValueObject<Username> {
    private constructor(
        readonly value: string,
    ) { super() }

    static create(value: string): Username {
        const normalized = StringUtils.normalize(value);
        UsernameInvariants.enforce(normalized);
        return new Username(normalized);
    }

    toString(): string {
        return this.value;
    }

    equals(other: Username): boolean {
        return this.value.localeCompare(other.value, undefined, { sensitivity: "accent" }) === 0;
    }

    static rehydrate(value: string): Username {
        return new Username(value);
    } 
}