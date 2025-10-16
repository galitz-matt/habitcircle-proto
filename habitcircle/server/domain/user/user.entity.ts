import { IdGenerator } from "@lib/utils";
import { Password } from "./password.value-object";

export class User {
    private constructor(
        readonly id: string,
        readonly createdAt: Date,
        readonly name: string,
        private readonly password: Password
    ) {}

    static async create(name: string, plainPassword: string): Promise<User> {
        const password = await Password.create(plainPassword);

        return new User(IdGenerator.new(), new Date(), name, password);
    }

    async verifyPassword(plain: string): Promise<boolean> {
        return this.password.matches(plain);
    }

    getPasswordHash(): string {
        return this.password.getHash();
    }

    static rehydrate(
        id: string,
        createdAt: Date,
        name: string,
        password: string,
    ): User {
        /* Used exclusively by repositories to reconstitue from persistence */
        return new User(id, createdAt, name, Password.fromHashed(password));
    }
}