import { StringUtils } from "@lib/utils";
import bcrypt from "bcryptjs"
import { PasswordInvariants } from "../invariants/password.invariant";

export class Password {

    private constructor(
        private readonly value: string, 
    ) {}

    static async create(plain: string): Promise<Password> {
        if (StringUtils.hasWhitespace(plain)) throw new Error("Password cannot include whitespace")
        if (!PasswordInvariants.isValidLength(plain)) throw new Error("Password must be between 12 and 999 characters");
        if (!StringUtils.hasUppercase(plain)) throw new Error("Password must include uppercase letter");
        if (!StringUtils.hasLowercase(plain)) throw new Error("Password must include lowercase letter");
        if (!StringUtils.hasSpecial(plain)) throw new Error("Password must include nonalphanumeric character");

        const hash = await bcrypt.hash(plain, 10);
        return new Password(hash);
    }

    getHash(): string {
        return this.value;
    }

    async matches(plain: string): Promise<boolean> {
        return bcrypt.compare(plain, this.value);
    }

    static rehydrate(hash: string): Password {
        return new Password(hash);
    }
}
