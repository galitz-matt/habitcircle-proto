import { StringUtils } from "@/lib/utils";
import { EmailAddressInvariants } from "../invariants/email-address.invariant";
import { Biography } from "./biography.value-object";

export class EmailAddress {
    private constructor(
        readonly value: string
    ) {}

    static create(value: string): EmailAddress {
        const normalized = StringUtils.normalize(value);
        EmailAddressInvariants.enforce(normalized);
        return new EmailAddress(value);
    }

    equals(other: EmailAddress): boolean {
        return !!other && other.value == this.value;
    }

    static rehydrate(value: string): Biography {
        return new EmailAddress(value);
    }

    toString(): string {
        return this.value;
    }

}