import { OAuthIdentity } from "@/server/domain/value-objects/auth/oauth-identity.value-object";
import { OAuthTokens } from "./oauth-tokens.value-object";
import { OAuthTokenDto } from "@/server/domain/dtos/auth/oauth-token.dto";
import { OAuthIdentityDto } from "@/server/domain/dtos/auth/oauth-identity.dto";
import { DomainAuthType } from "@/server/domain/types/auth-type";
import { Authentication } from "./authentication.interface";
import { AuthDto } from "../../dtos/auth/authentication.dto";

export type OAuthAuthenticationProps = {
    identity: OAuthIdentity,
    tokens: OAuthTokens
}

export class OAuthAuthentication implements Authentication {
    readonly type = DomainAuthType.OAUTH;

    private constructor(readonly props: OAuthAuthenticationProps) {}

    static create(identity: OAuthIdentity, tokens: OAuthTokens): OAuthAuthentication {
        return new OAuthAuthentication({ identity, tokens });
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
        return this.clone({ tokens: newTokens })
    }

    setIdentity(identity: OAuthIdentity): OAuthAuthentication {
        return this.clone({ identity: identity })
    }

    setTokens(tokens: OAuthTokens): OAuthAuthentication {
        return this.clone({ tokens: tokens });
    }

    static rehydrate(props: OAuthAuthenticationProps): OAuthAuthentication {
        return new OAuthAuthentication(props);
    }

    get identity() {
        return this.props.identity;
    }

    get tokens() {
        return this.props.tokens;
    }

    private clone(changes: Partial<OAuthAuthenticationProps>) {
        return new OAuthAuthentication({ ...this.props, ...changes });
    }
}