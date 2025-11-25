import { OAuthIdentity } from "@/server/domain/value-objects/auth/oauth-identity.value-object";
import { OAuthTokens } from "../value-objects/auth/oauth-tokens.value-object";
import { DomainAuthType } from "@/server/domain/types/auth-type";
import { Authentication } from "./authentication.interface";
import { AuthenticationDto } from "../dtos/auth/authentication.dto";

export class OAuthAuthentication implements Authentication {
    readonly type = DomainAuthType.OAUTH;

    private constructor(
        readonly identity: OAuthIdentity,
        private _tokens: OAuthTokens
    ) {
        Object.freeze(this);
    }

    static create(identity: OAuthIdentity, tokens: OAuthTokens): OAuthAuthentication {
        return new OAuthAuthentication(
            identity,
            tokens
        )
    }

    getAuthInfo(): AuthenticationDto {
        return {
            type: this.type,
            identity: this.identity.toInfo(),
            token: this._tokens.toInfo()
        }
    }

    refreshTokens(accessToken: string, expiresAt: Date): this {
        this._tokens = this._tokens.update(accessToken, expiresAt);
        return this;
    }

    get tokens() {
        return this._tokens;
    }

    static rehydrate(
        identity: OAuthIdentity,
        tokens: OAuthTokens
    ): OAuthAuthentication {
        return new OAuthAuthentication(
            identity,
            tokens
        );
    }
}