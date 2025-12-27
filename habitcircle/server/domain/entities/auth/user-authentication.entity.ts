import { OAuthAccountManager } from "./oauth-account-manager.entity";
import { CredentialsAccount, CreateCredentialsAccountProps } from "./credentials-account.entity";
import { OAuthAccount, CreateOAuthAccountProps } from "./oauth-account.entity";

export class UserAuthentication {
    private constructor(
        private credentialsAccount?: CredentialsAccount,
        private oauthAccountManager?: OAuthAccountManager
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
}