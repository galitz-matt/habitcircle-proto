import { IdGenerator } from "@/lib/utils";
import { Username } from "@/server/domain/value-objects/username.value-object";
import { EmailAddress } from "@/server/domain/value-objects/email-address.value-object";
import { Biography } from "@/server/domain/value-objects/biography.value-object";
import { Entity } from "./entity.abc";

export type UserProps = {
    id: string,
    createdAt: Date,
    username: Username,
    emailAddress?: EmailAddress,
    biography?: Biography,
    profilePictureKey?: string
}

export type CreateUserInput = {
    username: Username,
    emailAddress?: EmailAddress
}

export class User extends Entity<UserProps> {
    private constructor(props: UserProps) { super(props); }

    static create(input: CreateUserInput) {
        const props: UserProps = {
            id: IdGenerator.new(),
            createdAt: new Date(),
            username: input.username,
            emailAddress: input.emailAddress,
            biography: undefined,
            profilePictureKey: undefined
        }

        return new User(props);
    };

    equals(other: User): boolean {
        return !!other && this.id === other.id;
    }

    getBiography(): string | undefined {
        return this.biography?.toString();
    }

    getEmailAddress(): string | undefined {
        return this.emailAddress?.toString();
    }

    getUsername(): string {
        return this.username.toString();
    }

    getProfilePictureKey(): string | undefined {
        return this.profilePictureKey?.toString();
    }

    static rehydrate(props: UserProps): User {
        /* Used exclusively by repositories to reconstitue from persistence */
        return new User(props);
    }

    get id(): string {
        return this.props.id;
    }

    get createdAt(): Date {
        return this.props.createdAt;
    }

    get username(): Username {
        return this.props.username;
    }

    get emailAddress(): EmailAddress | undefined {
        return this.props.emailAddress;
    }

    get biography(): Biography | undefined {
        return this.props.biography;
    }

    get profilePictureKey(): string | undefined {
        return this.props.profilePictureKey;
    }

    protected create(props: UserProps): this {
        return new User(props) as this;
    }
}