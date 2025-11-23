import { IdGenerator } from "@/lib/utils";
import { DomainError } from "@/lib/errors";
import { AuthenticationDto } from "../dtos/auth/authentication.dto";
import { Password } from "../value-objects/auth/password.value-object";
import { CredentialsAuthentication } from "./credentials-auth.entity";
import { OAuthIdentity } from "../value-objects/auth/oauth-identity.value-object";
import { OAuthTokens } from "../value-objects/auth/oauth-tokens.value-object";
import { OAuthAuthentication } from "./oauth-auth.entity";
import { Authentication } from "./authentication.interface";

export class Account {

    private constructor(
        private readonly _id: string,
        private readonly _userId: string,
        private readonly _auth: Authentication
    ) {}
    
    static createWithCredentials(
        userId: string, 
        password: Password
    ): Account {
        const credentialsAuth = CredentialsAuthentication.create(password);

        return new Account(
            IdGenerator.new(),
            userId,
            credentialsAuth
        );
    }

    static createWithOAuth(
        userId: string, 
        identity: OAuthIdentity,
        tokens: OAuthTokens
    ) {
        const oauthAuth = OAuthAuthentication.create(identity, tokens);

        return new Account(
            IdGenerator.new(),
            userId,
            oauthAuth
        );
    }

    belongsTo(userId: string): boolean {
        return this._userId === userId;
    }

    getAuthInfo(): AuthenticationDto {
        return this._auth.getAuthInfo();
    }

    refreshTokens(accessToken: string, expiresAt: Date): this {
        if (typeof this._auth.refreshTokens !== "function")
            throw new DomainError("This authentication method cannot refresh tokens.")
            
        this._auth.refreshTokens(accessToken, expiresAt);
        return this;
    }

    static rehydrate(
        id: string,
        userId: string,
        auth: Authentication
    ): Account {
        if (!auth)
            throw new DomainError("Authentication method must be defined");
        
        return new Account(
            id,
            userId,
            auth
        );
    }
}