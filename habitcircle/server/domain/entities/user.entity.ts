import { IdGenerator } from "@/lib/utils";
import { Username } from "@/server/domain/value-objects/username.value-object";
import { Password } from "@/server/domain/value-objects/password.value-object";

export class User {
    private constructor(
        readonly id: string,
        readonly createdAt: Date,
        readonly updatedAt: Date,
        private readonly username: Username,
        private readonly email?: string, // replace with ValueObject
        private readonly password?: Password,
        private readonly biography?: string, // replace with ValueObject
        private readonly profilePictureKey?: string // replace with ValueObject
    ) {}

    static async create(usernameValue: string, passwordValue: string): Promise<User> {
        const username = Username.create(usernameValue)
        const password = await Password.create(passwordValue);
        return new User(IdGenerator.new(), new Date(), username, password);
    }

    equals(other: User): boolean {
        return !!other && this.id === other.id;
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