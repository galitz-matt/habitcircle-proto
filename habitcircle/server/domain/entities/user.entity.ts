import { IdGenerator } from "@/lib/utils";
import { Username } from "@/server/domain/value-objects/username.value-object";
import { Password } from "@/server/domain/value-objects/password.value-object";
import { EmailAddress } from "@/server/domain/value-objects/email-address.value-object";
import { Biography } from "@/server/domain/value-objects/biography.value-object";
import { DomainError } from "@/lib/errors";

export class User {
    private constructor(
        readonly id: string,
        readonly createdAt: Date,
        readonly updatedAt: Date,
        readonly username: Username,
        readonly emailAddress?: EmailAddress,
        readonly password?: Password,
        readonly biography?: Biography, 
        readonly profilePictureKey?: string 
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

    getBiography(): string | undefined {
        return !!this.biography ? this.biography.toString() : undefined;
    }

    getEmailAddress(): string | undefined {
        return !!this.emailAddress ? this.emailAddress.toString() : undefined;
    }

    getUsername(): string {
        return this.username.toString();
    }

    getPasswordHash(): string | undefined {
        return !!this.password ? this.password.toString() : undefined;
    }

    getProfilePictureKey(): string | undefined {
        return !!this.profilePictureKey ? this.profilePictureKey.toString() : undefined;
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

    async verifyPassword(plain: string): Promise<boolean> {
        if (!!this.password === false) {
            throw new DomainError("User does not have a password");
        }

        return !!this.password.matches(plain);
    }

    private clone(changes: Partial<User>): User {
        return new User(
            changes.id ?? this.id,
            changes.createdAt ?? this.createdAt,
            changes.updatedAt ?? this.updatedAt,
            changes.username ?? this.username,
            changes.emailAddress ?? this.emailAddress,
            changes.password ?? this.password,
            changes.biography ?? this.biography,
            changes.profilePictureKey ?? this.profilePictureKey
        )
    }
}