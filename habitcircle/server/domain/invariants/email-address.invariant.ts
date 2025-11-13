import { DomainError } from "@/lib/errors";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export class EmailAddressInvariants {
    public static enforce(value: string): void {
        this.ensureValid(value);
    }

    static ensureValid(value: string): void {
        if (!emailPattern.test(value)) {
            throw new DomainError("Invalid email address");
        }
    }
}