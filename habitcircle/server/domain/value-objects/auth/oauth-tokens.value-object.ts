import { DomainError } from "@/lib/errors";
import { OAuthTokenInfo } from "@/server/domain/dtos/auth/oauth-token-info.dto";

export class OAuthTokens {
    private constructor(
        readonly accessToken: string,
        readonly refreshToken?: string,
        readonly expiresAt?: Date
    ) {}

    static create(
        accessToken: string,
        refreshToken?: string,
        expiresAt?: Date
    ): OAuthTokens {
        if (accessToken.trim().length === 0) 
            throw new DomainError("Access token cannot be empty");
        if (expiresAt && expiresAt <= new Date()) {
            throw new DomainError("Expiration date must be in the future");
        }
        
        return new OAuthTokens(accessToken, refreshToken, expiresAt);
    }

    equals(other: OAuthTokens): boolean {
        return !!other
        && other.accessToken === this.accessToken
        && other.refreshToken === this.refreshToken
        && other.expiresAt?.getTime() === this.expiresAt?.getTime();
    }

    isExpired(): boolean {
        return this.expiresAt ? this.expiresAt <= new Date() : false;
    }

    refresh(accessToken: string, expiresAt?: Date) {
        return OAuthTokens.create(accessToken, this.refreshToken, expiresAt ?? this.expiresAt);
    }

    toInfo(): OAuthTokenInfo {
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
        return new OAuthTokens(
            accessToken,
            refreshToken,
            expiresAt
        )
    }
}