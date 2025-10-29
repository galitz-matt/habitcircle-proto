import { StringUtils } from "@lib/utils";
import { DomainError } from "@lib/errors";

export class CircleNameInvariants {
    static enforce(circleName: string): void {
        this.ensureValidLength(circleName);
        this.ensureValidCharacters(circleName);
    }

    static ensureValidLength(circleName: string): void {
        if (circleName.length < 1 || circleName.length > 100) {
            throw new DomainError("Circle name must be between 1 and 100 characters in length.");
        }
    }

    static ensureValidCharacters(circleName: string): void {
        if (!StringUtils.isValidCharacterSet(circleName)) {
            throw new DomainError("Circle name includes invalid characters.")
        }
    }
}