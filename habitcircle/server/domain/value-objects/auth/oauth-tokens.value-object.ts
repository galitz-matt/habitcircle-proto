import { OAuthTokensInvariants } from "../../invariants/auth/oauth-tokens.invariant";

export type CreateOAuthTokensProps = {
    accessToken?: string,
    refreshToken?: string,
    expiresAt?: Date,
}

export class OAuthTokens {
    private constructor(
        readonly accessToken?: string,
        readonly refreshToken?: string,
        readonly expiresAt?: Date
    ) {
        Object.freeze(this);
    }

    static create(props: CreateOAuthTokensProps): OAuthTokens {
        OAuthTokensInvariants.enforce(props.accessToken, props.refreshToken, props.expiresAt);
        return new OAuthTokens(props.accessToken, props.refreshToken, props.expiresAt);
    }

    static empty() {
        return new OAuthTokens();
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
        return OAuthTokens.create({
            accessToken, 
            refreshToken: this.refreshToken, 
            expiresAt,
        });
    }

    static rehydrate(
        accessToken?: string, 
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