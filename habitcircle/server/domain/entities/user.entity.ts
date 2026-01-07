import { IdGenerator } from "@/server/lib/utils";
import { Username } from "../value-objects/user/username.value-object";
import { Biography } from "../value-objects/user/biography.value-object";
import { CredentialsAccount, CreateCredentialsAccountProps } from "./auth/credentials-account.entity";
import { OAuthAccount, CreateOAuthAccountProps } from "./auth/oauth-account.entity";
import { UserProfile, CreateUserProfileProps } from "../value-objects/user/user-profile.value-object";
import { UserAuthentication } from "./auth/user-authentication.entity";

type AuthenticationMethod =
    | { type: "credentials"; account: CreateCredentialsAccountProps }
    | { type: "oauth"; accounts: CreateOAuthAccountProps[] }

export type CreateUserProps = {
    profile: CreateUserProfileProps 
    auth: AuthenticationMethod
}

export class User {
    private constructor(
        private readonly _id: string,
        private _createdAt: Date,
        private profile: UserProfile,
        private auth: UserAuthentication
    ) {}

    static create(props: CreateUserProps) {
        const profile = UserProfile.create(props.profile)
        const auth = props.auth.type === "credentials"
            ? UserAuthentication.withCredentials(props.auth.account)
            : UserAuthentication.withOAuth(props.auth.accounts);
        return new User(
            IdGenerator.new(),
            new Date(),
            profile, 
            auth);
    };

    equals(other: User): boolean {
        return !!other && this._id === other.id;
    }

    addOAuthAccount(props: CreateOAuthAccountProps): this {
        this.auth.addOAuthAccount(props);
        return this;
    }
    
    get id(): string {
        return this._id;
    }

    get createdAt(): Date {
        return new Date(this._createdAt);
    }

    get username(): Username {
        return this.profile.username;
    }

    get biography(): Biography | undefined {
        return this.profile.biography;
    }

    get profilePictureKey(): string | undefined {
        return this.profile.profilePictureKey;
    }

    get credentialsAccount(): CredentialsAccount | undefined {
        return this.auth.credentialsAccount;
    }

    get oauthAccounts(): OAuthAccount[] {
        return this.auth.oauthAccounts;
    }

    static rehydrate(
        id: string,
        createdAt: Date,
        profile: UserProfile,
        auth: UserAuthentication
    ): User {
        /* Used exclusively by repositories to reconstitue from persistence */
        return new User(
            id,
            createdAt,
            profile,
            auth
        );
    }
}