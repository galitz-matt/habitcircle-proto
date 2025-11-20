import { OAuthIdentity } from "@/server/domain/value-objects/auth/oauth-identity.value-object";
import { OAuthTokens } from "./oauth-tokens.value-object";
import { OAuthTokenDto } from "@/server/domain/dtos/auth/oauth-token.dto";
import { OAuthIdentityDto } from "@/server/domain/dtos/auth/oauth-identity.dto";
import { DomainAuthType } from "@/server/domain/types/auth-type";
import { Authentication } from "./authentication.ac";
import { AuthDto } from "../../dtos/auth/authentication.dto";

export class OAuthAuthentication extends Authentication {
    readonly type = DomainAuthType.OAUTH;

    private constructor(
        readonly identity: OAuthIdentity,
        readonly tokens: OAuthTokens
    ) { super() }

    static create(
        identity: OAuthIdentity,
        tokens: OAuthTokens
    ): OAuthAuthentication {
        return new OAuthAuthentication(identity, tokens);
    }

    getAuthInfo(): AuthDto {
        return {
            type: this.type,
            identityInfo: this.getIdentityInfo(),
            tokenInfo: this.getTokenInfo()
        }
    }

    getIdentityInfo(): OAuthIdentityDto {
        return {
            provider: this.identity.provider,
            providerAccountId: this.identity.providerAccountId
        }
    }

    getTokenInfo(): OAuthTokenDto {
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
        identity: OAuthIdentity,
        tokens: OAuthTokens
    ): OAuthAuthentication {
        return new OAuthAuthentication(identity, tokens);
    }
}