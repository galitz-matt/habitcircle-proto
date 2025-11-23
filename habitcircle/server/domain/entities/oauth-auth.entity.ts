import { OAuthIdentity } from "@/server/domain/value-objects/auth/oauth-identity.value-object";
import { OAuthTokens } from "../value-objects/auth/oauth-tokens.value-object";
import { DomainAuthType } from "@/server/domain/types/auth-type";
import { Authentication } from "./authentication.interface";
import { AuthenticationDto } from "../dtos/auth/authentication.dto";

export class OAuthAuthentication implements Authentication {
    readonly type = DomainAuthType.OAUTH;

    private constructor(
        private _identity: OAuthIdentity,
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
            identity: this._identity.toInfo(),
            token: this._tokens.toInfo()
        }
    }

    refreshTokens(accessToken: string, expiresAt: Date): OAuthAuthentication {
        const newTokens = this._tokens.refresh(accessToken, expiresAt);

        return new OAuthAuthentication(
            this._identity,
            newTokens
        )
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