import { IdGenerator } from "@/lib/utils";
import { DomainError } from "@/lib/errors";
import { AuthDto } from "../dtos/auth/authentication.dto";
import { Password } from "../value-objects/auth/password.value-object";
import { CredentialsAuthentication } from "../value-objects/auth/credentials-auth.value-object";
import { OAuthIdentity } from "../value-objects/auth/oauth-identity.value-object";
import { OAuthTokens } from "../value-objects/auth/oauth-tokens.value-object";
import { OAuthAuthentication } from "../value-objects/auth/oauth-auth.value-object";
import { Authentication } from "../value-objects/auth/authentication.interface";
import { DomainAuthType } from "../types/auth-type";

export type AccountProps = {
    id: string,
    userId: string,
    auth: Authentication
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

export class Account {

    private constructor(readonly props: AccountProps) {}
    
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

    getAuthInfo(): AuthDto {
        return this.auth.getAuthInfo();
    }

    refreshTokens(accessToken: string, expiresAt: Date): Account {
        if (this.auth.type !== DomainAuthType.OAUTH)
            throw new DomainError("Account is not using OAuth authentication");

        const newAuth = (this.auth as OAuthAuthentication)
            .refreshTokens(accessToken, expiresAt);
        return this.clone({ auth: newAuth });
    }

    get id(): string {
        return this.props.id;
    }

    get userId(): string {
        return this.props.userId;
    }

    get auth(): Authentication {
        return this.props.auth;
    }

    static rehydrate(props: AccountProps): Account {
        return new Account(props);
    }

    private clone(changes: Partial<AccountProps>) {
        return new Account({...this.props, ...changes});
    }
}