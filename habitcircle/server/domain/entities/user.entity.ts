import { IdGenerator } from "@lib/utils";
import { Username } from "../value-objects/username.value-object";
import { Password } from "../value-objects/password.value-object";

export class User {
    private constructor(
        readonly id: string,
        readonly createdAt: Date,
        private readonly username: Username,
        private readonly password: Password
    ) {}

    static async create(usernameValue: string, passwordValue: string): Promise<User> {
        const username = Username.create(usernameValue)
        const password = await Password.create(passwordValue);
        return new User(IdGenerator.new(), new Date(), username, password);
    }

    getUsername(): string {
        return this.username.toString();
    }

    async verifyPassword(plain: string): Promise<boolean> {
        return this.password.matches(plain);
    }

    getPasswordHash(): string {
        return this.password.toString();
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