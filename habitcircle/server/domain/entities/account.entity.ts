import { IdGenerator } from "@/lib/utils";
import { AccountAuth } from "../types/account-auth";
import { DomainError } from "@/lib/errors";
import { AuthInfo as AuthenticationInfo } from "../dtos/auth-info.dto";
import { Password } from "../value-objects/auth/password.value-object";
import { CredentialsAuthentication } from "../value-objects/auth/credentials-auth.value-object";
import { OAuthIdentity } from "../value-objects/auth/oauth-identity.value-object";
import { OAuthTokens } from "../value-objects/auth/oauth-tokens.value-object";
import { OAuthAuthentication } from "../value-objects/auth/oauth-auth.value-object";

export class Account {
    private constructor(
        readonly id: string,
        readonly userId: string,
        readonly auth: AccountAuth
    ) {}
    
    static createWithCredentials(userId: string, password: Password): Account {
        const credentialsAuth = CredentialsAuthentication.create(password);
        return new Account(IdGenerator.new(), userId, credentialsAuth);
    }

    static createWithOAuth(userId: string, identity: OAuthIdentity, tokens: OAuthTokens) {
        const oauthAuth = OAuthAuthentication.create(identity, tokens);
        return new Account(IdGenerator.new(), userId, oauthAuth);
    }

    belongsTo(userId: string): boolean {
        return this.userId === userId;
    }

    getAuthInfo(): AuthenticationInfo {
        if (this.auth.type === "credentials") {
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
        if (this.auth.type !== "oauth")
            throw new DomainError("Account is not using OAuth authentication");

        const newAuth = this.auth.refreshTokens(accessToken, expiresAt);
        return this.clone({ auth: newAuth });
    }

    static rehydrate(
        id: string,
        userId: string,
        auth: AccountAuth
    ): Account {
        return new Account(
            id,
            userId,
            auth
        );
    }

    private clone(changes: Partial<Account>): Account {
        return new Account(
            changes.id ?? this.id,
            changes.userId ?? this.userId,
            changes.auth ?? this.auth
        );
    }
}