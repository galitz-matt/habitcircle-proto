import { OAuthIdentity } from "@/server/domain/value-objects/auth/oauth-identity.value-object";
import { OAuthTokens } from "./oauth-tokens.value-object";
import { OAuthTokenInfo } from "../../dtos/oauth-token-info.dto";
import { OAuthIdentityInfo } from "../../dtos/oauth-identity-info.dto";

export class OAuthAuthentication {
    readonly type = "oauth" as const

    private constructor(
        readonly identity: OAuthIdentity,
        readonly tokens: OAuthTokens
    ) {}

    static create(
        identity: OAuthIdentity,
        tokens: OAuthTokens
    ): OAuthAuthentication {
        return new OAuthAuthentication(identity, tokens);
    }

    getIdentityInfo(): OAuthIdentityInfo {
        return {
            provider: this.identity.provider,
            providerAccountId: this.identity.providerAccountId
        }
    }

    getTokenInfo(): OAuthTokenInfo {
        return this.tokens.toInfo();
    }

    refreshTokens(accessToken: string, expiresAt: Date): OAuthAuthentication {
        const newTokens = this.tokens.refresh(accessToken, expiresAt);
        return new OAuthAuthentication(this.identity, newTokens);
    }

    setIdentity(identity: OAuthIdentity): OAuthAuthentication {
        return new OAuthAuthentication(identity, this.tokens);
    }

    setTokens(tokens: OAuthTokens): OAuthAuthentication {
        return new OAuthAuthentication(this.identity, tokens);
    }

    static rehydrate(
        identiy: OAuthIdentity,
        tokens: OAuthTokens
    ): OAuthAuthentication {
        return new OAuthAuthentication(identiy, tokens);
    }
}