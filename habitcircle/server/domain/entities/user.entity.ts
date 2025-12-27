import { IdGenerator } from "@/lib/utils";
import { Username } from "@/server/domain/value-objects/username.value-object";
import { Biography } from "@/server/domain/value-objects/biography.value-object";
import { CredentialsAccount } from "./auth/credentials-account.entity";
import { OAuthAccount } from "./auth/oauth-account.entity";
import { OAuthAccountManager } from "../value-objects/auth/oauth-account-manager.value-object";
import { DomainError } from "@/lib/errors";

// TODO: 1238use objects instead of VOs here
type CreateUserOptions = {
    biography?: string;
    profilePictureKey?: string;
    credentialsAccount?: CredentialsAccount;
    oauthAccounts?: OAuthAccount[];
}

export class User {
    private constructor(
        private readonly _id: string,
        private _createdAt: Date,
        private _username: Username,
        private _oauthAccountManager: OAuthAccountManager,
        private _biography?: Biography,
        private _profilePictureKey?: string,
        private _credentialsAccount?: CredentialsAccount,
    ) {}

    static create(
        username: string,
        options: CreateUserOptions
    ) {
        if (this.isMixingAuthentication(options.oauthAccounts, options.credentialsAccount)) {
            throw new DomainError("Cannot mix credentials and oauth authentication for one user");
        }
        const usernameVO = Username.create(username);
        const oauthAccountManager = OAuthAccountManager.create(options.oauthAccounts ?? [])
        const biographyVO = options.biography ? Biography.create(options.biography) : undefined;

        return new User(
            IdGenerator.new(),
            new Date(),
            usernameVO,
            oauthAccountManager,
            biographyVO,
            options.profilePictureKey,
            options.credentialsAccount,
        );
    };

    equals(other: User): boolean {
        return !!other && this._id === other.id;
    }

    addOAuthAccount(oauthAccount: OAuthAccount): this {
        this._oauthAccountManager = this._oauthAccountManager.addAccount(oauthAccount);
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
        return this._oauthAccountManager.accounts;
    }

    static rehydrate(
        id: string,
        createdAt: Date,
        username: Username,
        oauthAccountManager: OAuthAccountManager,
        biography?: Biography,
        profilePictureKey?: string,
        credentialsAccount?: CredentialsAccount,
    ): User {
        /* Used exclusively by repositories to reconstitue from persistence */
        return new User(
            id,
            createdAt,
            username,
            oauthAccountManager,
            biography,
            profilePictureKey,
            credentialsAccount
        );
    }

    private static isMixingAuthentication(oauthAccounts?: OAuthAccount[], credentialsAccount?: CredentialsAccount): boolean {
        return !!oauthAccounts && oauthAccounts.length > 0 && !!credentialsAccount;
    }
}