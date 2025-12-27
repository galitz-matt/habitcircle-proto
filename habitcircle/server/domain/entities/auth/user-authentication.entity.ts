import { DomainError } from "@/lib/errors";
import { OAuthAccountManager } from "../../value-objects/auth/oauth-account-manager.value-object";
import { CredentialsAccount, CreateCredentialsAccountProps } from "./credentials-account.entity";
import { OAuthAccount, CreateOAuthAccountProps } from "./oauth-account.entity";

export class UserAuthentication {
    private constructor(
        private _credentialsAccount?: CredentialsAccount,
        private _oauthAccountManager?: OAuthAccountManager
    ) {}

    static withCredentials(props: CreateCredentialsAccountProps) {
        return new UserAuthentication(
            CredentialsAccount.create(props),
            undefined
        );
    }

    static withOAuth(props: CreateOAuthAccountProps[]) {
        const oauthAccounts = props.map(oa => OAuthAccount.create(oa));
        return new UserAuthentication(
            undefined,
            OAuthAccountManager.create(oauthAccounts)
        );
    }

    addOAuthAccount(props: CreateOAuthAccountProps) {
        if (this.usesCredentials()) {
            throw new DomainError("User uses credentials for auth, cannot mix auth methods");
        }
        if (!this._oauthAccountManager) {
            this._oauthAccountManager = OAuthAccountManager.create([]);
        }
        const account = OAuthAccount.create(props);
        this._oauthAccountManager = this._oauthAccountManager.addAccount(account);
    }

    get credentialsAccount(): CredentialsAccount | undefined {
        return this.credentialsAccount;
    }

    get oauthAccounts(): OAuthAccount[] {
        return this._oauthAccountManager?.accounts ?? [];
    }

    usesCredentials(): boolean {
        return !!this._credentialsAccount;
    }

    usesOAuth(): boolean {
        return !!this._oauthAccountManager;
    }

    static rehydrate(
        credentialsAccount?: CredentialsAccount,
        oauthAccountManager?: OAuthAccountManager
    ): UserAuthentication {
        return new UserAuthentication(
            credentialsAccount,
            oauthAccountManager
        )
    }
}