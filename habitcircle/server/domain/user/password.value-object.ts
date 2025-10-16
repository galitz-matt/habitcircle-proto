import { PasswordValidator } from "@lib/utils";
import bcrypt from "bcryptjs"

export class Password {

    private constructor(
        private readonly value: string, 
        private readonly hashed: boolean,
    ) {}

    static async create(plain: string): Promise<Password> {
        if (!PasswordValidator.isValidLength(plain)) throw new Error("Password must be between 12 and 999 characters");
        if (!PasswordValidator.hasUppercase(plain)) throw new Error("Password must include uppercase letter");
        if (!PasswordValidator.hasLowercase(plain)) throw new Error("Password must include lowercase letter");
        if (!PasswordValidator.hasSpecial(plain)) throw new Error("Password must include nonalphanumeric character");

        const hash = await bcrypt.hash(plain, 10);
        return new Password(hash, true);
    }

    static fromHashed(hash: string): Password {
        return new Password(hash, true);
    }

    async matches(plain: string): Promise<boolean> {
        return bcrypt.compare(plain, this.value);
    }

    getHash(): string {
        return this.value;
    }
}
