import { OAuthIdentity } from "@/server/domain/value-objects/auth/oauth-identity.value-object";
import { OAuthTokens } from "../../value-objects/auth/oauth-tokens.value-object";

export class OAuthAuthentication {

    private constructor(
        readonly identity: OAuthIdentity,
        private _tokens: OAuthTokens
    ) {}

    static create(identity: OAuthIdentity, tokens: OAuthTokens): OAuthAuthentication {
        return new OAuthAuthentication(
            identity,
            tokens
        )
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