import { RESERVED_USERNAMES } from "@lib/constants"

export class UsernameInvariants {
    static isValidLength(s: string): boolean {
        return 3 <= s.length && s.length < 40;
    }

    static isReserved(s: string): boolean {
        return RESERVED_USERNAMES.has(s);
    }
}