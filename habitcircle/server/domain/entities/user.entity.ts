import { IdGenerator } from "@/lib/utils";
import { Username } from "@/server/domain/value-objects/username.value-object";
import { Password } from "@/server/domain/value-objects/password.value-object";
import { EmailAddress } from "@/server/domain/value-objects/email-address.value-object";
import { Biography } from "@/server/domain/value-objects/biography.value-object";

export class User {
    private constructor(
        readonly id: string,
        readonly createdAt: Date,
        readonly updatedAt: Date,
        private readonly username: Username,
        private readonly emailAddress?: EmailAddress,
        private readonly password?: Password,
        private readonly biography?: Biography, 
        private readonly profilePictureKey?: string 
    ) {}

    static async create(rawUsername: string, rawPassword?: string, rawEmailAddress?: string): Promise<User> {
        const username = Username.create(rawUsername)
        const password = rawPassword ? await Password.create(rawPassword): undefined;
        const emailAddress = rawEmailAddress ? EmailAddress.create(rawEmailAddress): undefined;
        return new User(
            IdGenerator.new(),
            new Date(),
            new Date(),
            username,
            emailAddress,
            password
        );
    };

    equals(other: User): boolean {
        return !!other && this.id === other.id;
    }

    getUsername(): string {
        return this.username.toString();
    }

    async verifyPassword(plain: string): Promise<boolean> {
        return !!this.password ? this.password.matches(plain) : false;
    }

    getPasswordHash(): string {
        return !!this.password ? this.password.toString() : "";
    }

    static rehydrate(
        id: string,
        createdAt: Date,
        updatedAt: Date,
        username: string,
        emailAddress?: string,
        password?: string,
        biography?: string,
        profilePictureKey?: string
    ): User {
        /* Used exclusively by repositories to reconstitue from persistence */
        return new User(
            id, 
            createdAt, 
            updatedAt,
            Username.rehydrate(username), 
            emailAddress ? EmailAddress.rehydrate(emailAddress) : undefined,
            password ? Password.rehydrate(password) : undefined,
            biography ? Biography.rehydrate(biography) : undefined,
            profilePictureKey ? profilePictureKey : undefined,
        );
    }
}