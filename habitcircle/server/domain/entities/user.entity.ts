import { IdGenerator } from "@lib/utils";
import { Username } from "../value-objects/username.value-object";
import { Password } from "../value-objects/password.value-object";

export class User {
    private constructor(
        readonly id: string,
        readonly createdAt: Date,
        readonly username: Username,
        private readonly password: Password
    ) {}

    static async create(plainUsername: string, plainPassword: string): Promise<User> {
        const username = Username.create(plainUsername)
        const password = await Password.create(plainPassword);

        return new User(IdGenerator.new(), new Date(), username, password);
    }

    getUsername(): string {
        return this.username.toString();
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
        username: string,
        password: string,
    ): User {
        /* Used exclusively by repositories to reconstitue from persistence */
        return new User(id, createdAt, Username.rehydrate(username), Password.rehydrate(password));
    }
}