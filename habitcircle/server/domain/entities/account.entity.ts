import { IdGenerator } from "@/lib/utils";
import { AccountAuth } from "../types/account-auth";
import { DomainError } from "@/lib/errors";
import { AuthInfo as AuthenticationInfo } from "../dtos/auth/auth-info.dto";
import { Password } from "../value-objects/auth/password.value-object";
import { CredentialsAuthentication } from "../value-objects/auth/credentials-auth.value-object";
import { OAuthIdentity } from "../value-objects/auth/oauth-identity.value-object";
import { OAuthTokens } from "../value-objects/auth/oauth-tokens.value-object";
import { OAuthAuthentication } from "../value-objects/auth/oauth-auth.value-object";
import { Entity } from "./entity.ac";
import { AuthType } from "../types/auth-type";

export type AccountProps = {
    id: string,
    userId: string,
    auth: AccountAuth
}

export type CreateAccountWithCredentialsInput = {
    userId: string,
    password: Password
}

export type CreateAccountWithOAuthInput = {
    userId: string,
    identity: OAuthIdentity,
    tokens: OAuthTokens
}

export class Account extends Entity<AccountProps> {

    private constructor(props: AccountProps) { super(props); }
    
    static createWithCredentials(input: CreateAccountWithCredentialsInput): Account {
        const credentialsAuth = CredentialsAuthentication.create(input.password);

        const props: AccountProps = {
            id: IdGenerator.new(),
            userId: input.userId,
            auth: credentialsAuth
        }

        return new Account(props);
    }

    static createWithOAuth(input: CreateAccountWithOAuthInput) {
        const oauthAuth = OAuthAuthentication.create(input.identity, input.tokens);

        const props: AccountProps = {
            id: IdGenerator.new(),
            userId: input.userId,
            auth: oauthAuth
        }

        return new Account(props);
    }

    belongsTo(userId: string): boolean {
        return this.userId === userId;
    }

    getAuthInfo(): AuthenticationInfo {
        if (this.usesCredentials()) {
            return {
                type: "credentials",
                failedAttempts: this.auth.failedAttempts,
                emailVerified: this.auth.emailVerified
            }
        }
        return {
            type: "oauth",
            identityInfo: this.auth.getIdentityInfo(),
            tokenInfo: this.auth.getTokenInfo()
        }
    }

    refreshTokens(accessToken: string, expiresAt: Date): Account {
        if (this.usesCredentials())
            throw new DomainError("Account is not using OAuth authentication");

        const newAuth = this.auth.refreshTokens(accessToken, expiresAt);
        return this.clone({ auth: newAuth });
    }

    get id(): string {
        return this.props.id;
    }

    get userId(): string {
        return this.props.userId;
    }

    get auth(): AccountAuth {
        return this.props.auth;
    }

    static rehydrate(props: AccountProps): Account {
        return new Account(props);
    }

    protected create(props: AccountProps): this {
        return new Account(props) as this;
    }

}