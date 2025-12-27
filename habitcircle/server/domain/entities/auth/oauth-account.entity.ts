import { IdGenerator } from "@/lib/utils";
import { CreateOAuthIdentityProps, OAuthIdentity } from "../../value-objects/auth/oauth-identity.value-object";
import { CreateOAuthTokensProps, OAuthTokens } from "../../value-objects/auth/oauth-tokens.value-object";

export type CreateOAuthAccountProps = {
    identity: CreateOAuthIdentityProps;
    tokens?: CreateOAuthTokensProps;
    emailAddress?: string;
    emailVerified?: boolean;
}

export class OAuthAccount {

    private constructor(
        private readonly _id: string,
        private readonly _lastUsedAt: Date,
        readonly identity: OAuthIdentity,
        private _tokens: OAuthTokens,
        private readonly _emailAddress?: string,
        private _emailVerified?: boolean
    ) {}

    static create(props: CreateOAuthAccountProps): OAuthAccount {
        const identity = OAuthIdentity.create(props.identity);
        const tokens = props.tokens
            ? OAuthTokens.create(props.tokens)
            : OAuthTokens.empty()

        return new OAuthAccount(
            IdGenerator.new(),
            new Date(),
            identity,
            tokens,
            props.emailAddress,
            props.emailVerified
        );
    }

    refreshTokens(accessToken: string, expiresAt: Date): this {
        this._tokens = this._tokens.update(accessToken, expiresAt);
        return this;
    }

    get tokens() {
        return this._tokens;
    }

    get id(): string {
        return this._id;
    }

    get lastUsedAt(): Date {
        return this._lastUsedAt;
    }

    get provider(): string {
        return this.identity.provider;
    }

    get providerAccountId(): string {
        return this.identity.providerAccountId;
    }

    get accessToken(): string | undefined {
        return this.tokens.accessToken;
    }

    get refreshToken(): string | undefined {
        return this.tokens.refreshToken;
    }

    get expiresAt(): Date | undefined {
        return this.tokens.expiresAt;
    }

    get emailAddress(): string | undefined {
        return this._emailAddress;
    }

    get emailVerified(): boolean | undefined {
        return this._emailVerified;
    }

    static rehydrate(
        id: string,
        lastUsedAt: Date,
        identity: OAuthIdentity,
        tokens: OAuthTokens,
        emailAddress?: string,
        emailVerified?: boolean
    ): OAuthAccount {
        return new OAuthAccount(
            id,
            lastUsedAt,
            identity,
            tokens,
            emailAddress,
            emailVerified
        );
    }
}