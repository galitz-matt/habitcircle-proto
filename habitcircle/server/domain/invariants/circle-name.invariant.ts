import { DomainError } from "@/server/lib/errors";
import { NAME_PATTERN } from "@/server/lib/constants";

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
        if (!NAME_PATTERN.test(circleName)) {
            throw new DomainError("Circle name includes invalid characters.")
        }
    }
}