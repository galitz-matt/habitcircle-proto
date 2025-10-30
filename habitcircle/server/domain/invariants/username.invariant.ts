import { StringUtils } from "@lib/utils";
import { RESERVED_USERNAMES, VALID_USERNAME_CHARACTERS_PATTERN } from "@lib/constants"
import { DomainError } from "@lib/errors";

export class UsernameInvariants {
    static enforce(usernameValue: string): void {
        this.ensureValidLength(usernameValue);
        this.ensureNotReserved(usernameValue);
        this.ensureNoWhitespace(usernameValue);
        this.ensureValidCharacters(usernameValue);
    }

    static ensureValidLength(usernameValue: string): void {
        if (usernameValue.length < 3 || usernameValue.length > 40) {
            throw new DomainError("Username must be between 3 and 40 characters long.");
        }
    }

    static ensureNotReserved(usernameValue: string): void {
        if (RESERVED_USERNAMES.has(usernameValue)) {
            throw new DomainError("Username is reserved.");
        }
    }

    static ensureValidCharacters(usernameValue: string) {
        if (!VALID_USERNAME_CHARACTERS_PATTERN.test(usernameValue)) {
            throw new DomainError("Username includes invalid characters.");
        }
    }

    static ensureNoWhitespace(usernameValue: string) {
        if (StringUtils.hasWhitespace(usernameValue)) {
            throw new DomainError("Username cannot contain whitespace.")
        }
    }
}
