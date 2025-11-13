import { StringUtils } from "@/lib/utils";
import { EmailAddressInvariants } from "../invariants/email-address.invariant";
import { ValueObject } from "./value-object.base";

export class EmailAddress extends ValueObject<EmailAddress> {
    private constructor(
        readonly value: string
    ) { super() }

    static create(value: string) {
        const normalized = StringUtils.normalize(value);
        EmailAddressInvariants.enforce(normalized);
        return new EmailAddress(value);
    }

    equals(other: EmailAddress) {
        return !!other && other.value == this.value;
    }

    toString(): string {
        return this.value;
    }
}