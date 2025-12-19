import { IdGenerator } from "@/lib/utils";
import { Username } from "@/server/domain/value-objects/username.value-object";
import { Biography } from "@/server/domain/value-objects/biography.value-object";
import { CredentialsAccount } from "./auth/credentials-account.entity";
import { OAuthAccount } from "./auth/oauth-account.entity";

export class User {
    private constructor(
        private readonly _id: string,
        private _createdAt: Date,
        private _username: Username,
        private _oauthAccounts: OAuthAccount[],
        private _emailAddress?: string,
        private _biography?: Biography,
        private _profilePictureKey?: string,
        private _credentialsAccount?: CredentialsAccount,
    ) {}
    

    static create(
        username: Username,
        oauthAccounts?: OAuthAccount[],
        emailAddress?: string,
        biography?: Biography,
        profilePictureKey?: string,
        credentialsAccount?: CredentialsAccount,
    ) {
        return new User(
            IdGenerator.new(),
            new Date(),
            username,
            oauthAccounts ?? [],
            emailAddress,
            biography,
            profilePictureKey,
            credentialsAccount,
        );
    };

    equals(other: User): boolean {
        return !!other && this._id === other.id;
    }

    addOAuthAccount(oauthAccount: OAuthAccount): this {
        this._oauthAccounts.push(oauthAccount);
        return this;
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

    get credentialsAccount(): CredentialsAccount | undefined {
        return this._credentialsAccount;
    }

    get oauthAccounts(): OAuthAccount[] {
        return this._oauthAccounts;
    }

    static rehydrate(
        id: string,
        createdAt: Date,
        username: Username,
        oauthAccounts: OAuthAccount[],
        emailAddress?: string,
        biography?: Biography,
        profilePictureKey?: string,
        credentialsAccount?: CredentialsAccount,
    ): User {
        /* Used exclusively by repositories to reconstitue from persistence */
        return new User(
            id,
            createdAt,
            username,
            oauthAccounts,
            emailAddress,
            biography,
            profilePictureKey,
            credentialsAccount
        );
    }
}