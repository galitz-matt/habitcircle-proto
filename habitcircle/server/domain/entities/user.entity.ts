import { IdGenerator } from "@/lib/utils";
import { Username } from "@/server/domain/value-objects/username.value-object";
import { EmailAddress } from "@/server/domain/value-objects/email-address.value-object";
import { Biography } from "@/server/domain/value-objects/biography.value-object";

export class User {
    private constructor(
        readonly id: string,
        readonly createdAt: Date,
        readonly username: Username,
        readonly emailAddress?: EmailAddress,
        readonly biography?: Biography, 
        readonly profilePictureKey?: string 
    ) {}

    static async create(
        username: Username, 
        emailAddress?: EmailAddress
    ): Promise<User> {
        return new User(
            IdGenerator.new(),
            new Date(),
            username,
            emailAddress,
        );
    };

    equals(other: User): boolean {
        return !!other && this.id === other.id;
    }

    getBiography(): string | undefined {
        return this.biography ? this.biography.toString() : undefined;
    }

    getEmailAddress(): string | undefined {
        return this.emailAddress ? this.emailAddress.toString() : undefined;
    }

    getUsername(): string {
        return this.username.toString();
    }

    getProfilePictureKey(): string | undefined {
        return this.profilePictureKey ? this.profilePictureKey.toString() : undefined;
    }

    static rehydrate(
        id: string,
        createdAt: Date,
        username: string,
        emailAddress?: string,
        biography?: string,
        profilePictureKey?: string
    ): User {
        /* Used exclusively by repositories to reconstitue from persistence */
        return new User(
            id, 
            createdAt, 
            Username.rehydrate(username), 
            emailAddress ? EmailAddress.rehydrate(emailAddress) : undefined,
            biography ? Biography.rehydrate(biography) : undefined,
            profilePictureKey ? profilePictureKey : undefined,
        );
    }

    private clone(changes: Partial<User>): User {
        return new User(
            changes.id ?? this.id,
            changes.createdAt ?? this.createdAt,
            changes.username ?? this.username,
            changes.emailAddress ?? this.emailAddress,
            changes.biography ?? this.biography,
            changes.profilePictureKey ?? this.profilePictureKey
        )
    }
}