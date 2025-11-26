import { IdGenerator, StringUtils } from "@/lib/utils";
import { Username } from "@/server/domain/value-objects/username.value-object";
import { Biography } from "@/server/domain/value-objects/biography.value-object";

export class User {
    private constructor(
        private readonly _id: string,
        private _username: Username,
        private _emailAddress?: string,
        private _biography?: Biography,
        private _profilePictureKey?: string
    ) {}

    static create(username: Username, emailAddress: string) {
        const normalizedEmail = StringUtils.normalize(emailAddress).toLowerCase();

        return new User(
            IdGenerator.new(),
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

    get username(): Username {
        return this._username;
    }

    static rehydrate(
        id: string,
        username: Username,
        emailAddress?: string,
        biography?: Biography,
        profilePictureKey?: string
    ): User {
        /* Used exclusively by repositories to reconstitue from persistence */
        return new User(
            id,
            username,
            emailAddress,
            biography,
            profilePictureKey
        );
    }
}