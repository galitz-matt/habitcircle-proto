import { IdGenerator } from "@/lib/utils";
import { OAuthIdentity } from "../../value-objects/auth/oauth-identity.value-object";
import { OAuthTokens } from "../../value-objects/auth/oauth-tokens.value-object";

export class OAuthAccount {

    private constructor(
        private readonly _id: string,
        private readonly _lastUsedAt: Date,
        readonly identity: OAuthIdentity,
        private _tokens: OAuthTokens
    ) {}

    static create(
        identity: OAuthIdentity,
        tokens: OAuthTokens,
    ): OAuthAccount {
        return new OAuthAccount(
            IdGenerator.new(),
            new Date(),
            identity,
            tokens
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

    static rehydrate(
        id: string,
        lastUsedAt: Date,
        identity: OAuthIdentity,
        tokens: OAuthTokens
    ): OAuthAccount {
        return new OAuthAccount(
            id,
            lastUsedAt,
            identity,
            tokens
        );
    }
}