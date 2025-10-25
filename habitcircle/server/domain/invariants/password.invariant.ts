import { StringUtils } from "@lib/utils";
import { DomainError } from "../errors/domain-error";

export class PasswordInvariants {
    static enforce(password: string): void {
        this.ensureValidLength(password);
        this.ensureNoWhitespace(password);
        this.ensureHasUppercase(password);
        this.ensureHasLowercase(password);
    }

    static ensureValidLength(password: string): void {
        if (12 > password.length && password.length >= 1000) {
            throw new DomainError("Password must be between 12 and 1000 characters long");
        }
    }

    static ensureNoWhitespace(password: string): void {
        if (StringUtils.hasWhitespace(password)) {
            throw new DomainError("Password cannot contain whitespace");
        }
    }

    static ensureHasUppercase(password: string): void {
        if (!StringUtils.hasUppercase(password)) {
            throw new DomainError("Password must include uppercase character");
        }
    }

    static ensureHasLowercase(password: string): void {
        if (!StringUtils.hasLowercase(password)) {
            throw new DomainError("Password must include lowercase character");
        }
    }

    static ensureHasSpecial(password: string): void {
        if (!StringUtils.hasSpecial(password)) {
            throw new DomainError("Password must include special character")
        }
    }
}