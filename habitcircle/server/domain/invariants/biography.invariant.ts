import { DomainError } from "@/lib/errors";

export class BiographyInvariants {
    static enforce(value: string): void {
        this.ensureValidLength(value);
    }

    static ensureValidLength(value: string): void {
        if (value.length > 200) {
            throw new DomainError("Biography must be at most 200 characters");
        } 
    }
}