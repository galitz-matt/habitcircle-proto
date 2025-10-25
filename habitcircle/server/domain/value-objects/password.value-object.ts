import bcrypt from "bcryptjs"
import { PasswordInvariants } from "../invariants/password.invariant";
import { ValueObject } from "./value-object.base";

export class Password extends ValueObject<Password> {

    private constructor(
        private readonly value: string, 
    ) { super() }

    static async create(value: string): Promise<Password> {
        PasswordInvariants.enforce(value);
        const hash = await bcrypt.hash(value, 10);
        return new Password(hash);
    }

    toString(): string {
        return this.value;
    }

    async equals(other: Password): Promise<boolean> {
        return bcrypt.compare(other.toString(), this.value);
    }

    async matches(otherValue: string): Promise<boolean> {
        return bcrypt.compare(otherValue, this.value);
    }

    static rehydrate(hash: string): Password {
        return new Password(hash);
    }
}
