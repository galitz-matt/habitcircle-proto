import { IdGenerator, StringUtils } from "@/lib/utils";
import { Username } from "@/server/domain/value-objects/username.value-object";
import { Biography } from "@/server/domain/value-objects/biography.value-object";

export class User {
    private constructor(
        private readonly _id: string,
        private _createdAt: Date,
        private _username: Username,
        private _emailAddress?: string,
        private _biography?: Biography,
        private _profilePictureKey?: string
    ) {}

    static create(username: Username, emailAddress: string) {
        const normalizedEmail = StringUtils.normalize(emailAddress).toLowerCase();

        return new User(
            IdGenerator.new(),
            new Date(),
            username,
            normalizedEmail 
        );
    };

    equals(other: User): boolean {
        return !!other && this._id === other.id;
    }
    
    get id(): string {
        return this._id;
    }

    get createdAt(): Date {
        return new Date(this._createdAt);
    }

    get username(): Username {
        return this._username;
    }

    get emailAddress(): string | undefined {
        return this._emailAddress;
    }

    get biography(): Biography | undefined {
        return this._biography;
    }

    get profilePictureKey(): string | undefined {
        return this._profilePictureKey;
    }

    static rehydrate(
        id: string,
        createdAt: Date,
        username: Username,
        emailAddress?: string,
        biography?: Biography,
        profilePictureKey?: string
    ): User {
        /* Used exclusively by repositories to reconstitue from persistence */
        return new User(
            id,
            createdAt,
            username,
            emailAddress,
            biography,
            profilePictureKey
        );
    }
}