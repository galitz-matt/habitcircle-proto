import { OAuthTokenDto } from "@/server/domain/dtos/auth/oauth-token.dto";
import { OAuthTokensInvariants } from "../../invariants/auth/oauth-tokens.invariant";

export class OAuthTokens {
    private constructor(
        readonly accessToken: string,
        readonly refreshToken?: string,
        readonly expiresAt?: Date
    ) {
        Object.freeze(this);
    }

    static create(
        accessToken: string,
        refreshToken?: string,
        expiresAt?: Date
    ): OAuthTokens {
        OAuthTokensInvariants.enforce(accessToken, refreshToken, expiresAt);
        return new OAuthTokens(accessToken, refreshToken, expiresAt);
    }

    equals(other: OAuthTokens): boolean {
        return !!other
        && other.accessToken === this.accessToken
        && other.refreshToken === this.refreshToken
        && other.expiresAt?.getTime() === this.expiresAt?.getTime();
    }

    isExpired(): boolean {
        return !!this.expiresAt ? this.expiresAt <= new Date() : false;
    }

    update(accessToken: string, expiresAt?: Date) {
        return OAuthTokens.create(accessToken, this.refreshToken, expiresAt ?? this.expiresAt);
    }

    toInfo(): OAuthTokenDto {
        return {
            accessToken: this.accessToken,
            refreshToken: this.refreshToken ?? undefined,
            expiresAt: this.expiresAt ?? undefined
        }
    }

    static rehydrate(
        accessToken: string, 
        refreshToken?: string, 
        expiresAt?: Date
    ): OAuthTokens {
        OAuthTokensInvariants.enforce(accessToken, refreshToken, expiresAt);
        return new OAuthTokens(
            accessToken,
            refreshToken,
            expiresAt
        )
    }
}