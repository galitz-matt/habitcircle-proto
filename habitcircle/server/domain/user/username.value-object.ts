import { UsernameUtils } from "@lib/utils";

export class Username {
    constructor(
        readonly value: string,
    ) {}

    static create(value: string): Username {
        const normalized = UsernameUtils.normalize(value);

        if (!UsernameUtils.isValidLength(normalized)) throw new Error("Username must be between 3 and 40 characters");
        if (UsernameUtils.isReserved(normalized)) throw new Error("Username is banned");
        if (!UsernameUtils.isValidCharacterSet(normalized)) throw new Error("Username includes invalid characters");
        if (UsernameUtils.hasWhitespace(normalized)) throw new Error("Username cannot contain whitespace");

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