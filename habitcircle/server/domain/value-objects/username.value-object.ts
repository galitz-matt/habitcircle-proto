import { StringUtils, UsernameInvariants } from "@lib/utils";

export class Username {
    private constructor(
        readonly value: string,
    ) {}

    static create(value: string): Username {
        const normalized = StringUtils.normalize(value);

        if (!UsernameInvariants.isValidLength(normalized)) throw new Error("Username must be between 3 and 40 characters");
        if (UsernameInvariants.isReserved(normalized)) throw new Error("Username is banned");
        if (!StringUtils.isValidCharacterSet(normalized)) throw new Error("Username includes invalid characters");
        if (StringUtils.hasWhitespace(normalized)) throw new Error("Username cannot contain whitespace");

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