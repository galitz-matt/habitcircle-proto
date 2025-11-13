import bcrypt from "bcryptjs"
import { PasswordInvariants } from "../invariants/password.invariant";

export class Password {

    private constructor(
        private readonly value: string, 
    ) {}

    static async create(value: string): Promise<Password> {
        PasswordInvariants.enforce(value);
        const hash = await bcrypt.hash(value, 10);
        return new Password(hash);
    }

    toString(): string {
        return this.value;
    }

    equals(other: Password): boolean {
        return !!other && this.value === other.toString();
    }

    async matches(otherValue: string): Promise<boolean> {
        return bcrypt.compare(otherValue, this.value);
    }

    static rehydrate(hash: string): Password {
        return new Password(hash);
    }
}
