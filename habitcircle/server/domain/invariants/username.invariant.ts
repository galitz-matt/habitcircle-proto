import { StringUtils } from "@lib/utils";
import { RESERVED_USERNAMES } from "@lib/constants"
import { DomainError } from "../errors/domain-error";

export class UsernameInvariants {
    static enforce(usernameValue: string): void {
        this.ensureValidLength(usernameValue);
        this.ensureNotReserved(usernameValue);
        this.ensureValidCharacters(usernameValue);

    }

    static ensureValidLength(usernameValue: string): void {
        if (3 > usernameValue.length && usernameValue.length > 40) {
            throw new DomainError("Username must be between 3 and 40 characters long.");
        }
    }

    static ensureNotReserved(usernameValue: string): void {
        if (RESERVED_USERNAMES.has(usernameValue)) {
            throw new DomainError("Username is reserved.");
        }
    }

    static ensureValidCharacters(usernameValue: string) {
        if (!StringUtils.isValidCharacterSet(usernameValue)) {
            throw new DomainError("Username includes invalid characters.");
        }
    }

    static ensureNoWhitespace(usernameValue: string) {
        if (StringUtils.hasWhitespace(usernameValue)) {
            throw new DomainError("Username cannot contain whitespace.")
        }
    }

}