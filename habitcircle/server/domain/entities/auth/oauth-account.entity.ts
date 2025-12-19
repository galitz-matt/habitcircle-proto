import { IdGenerator } from "@/lib/utils";
import { OAuthIdentity } from "../../value-objects/auth/oauth-identity.value-object";
import { OAuthTokens } from "../../value-objects/auth/oauth-tokens.value-object";
import { OAuthAuthentication } from "./oauth-auth.entity";

export class OAuthAccount {

    private constructor(
        private readonly _id: string,
        private readonly _userId: string,
        private readonly _lastUsedAt: Date,
        private readonly _auth: OAuthAuthentication
    ) {}

    static create(
        userId: string, 
        identity: OAuthIdentity,
        tokens: OAuthTokens,
    ): OAuthAccount {
        const oauthAuth = OAuthAuthentication.create(identity, tokens);

        return new OAuthAccount(
            IdGenerator.new(),
            userId,
            new Date(),
            oauthAuth
        );
    }

    belongsTo(userId: string): boolean {
        return this._userId === userId;
    }

    refreshTokens(accessToken: string, expiresAt: Date): this {
        this._auth.refreshTokens(accessToken, expiresAt);
        return this;
    }

    get id(): string {
        return this._id;
    }

    get userId(): string {
        return this._userId;
    }

    get lastUsedAt(): Date {
        return this._lastUsedAt;
    }

    get provider(): string {
        return this._auth.identity.provider;
    }

    get providerAccountId(): string {
        return this._auth.identity.providerAccountId;
    }

    get accessToken(): string | undefined {
        return this._auth.tokens.accessToken;
    }

    get refreshToken(): string | undefined {
        return this._auth.tokens.refreshToken;
    }

    get expiresAt(): Date | undefined {
        return this._auth.tokens.expiresAt;
    }

    static rehydrate(
        id: string,
        userId: string,
        lastUsedAt: Date,
        auth: OAuthAuthentication
    ): OAuthAccount {
        return new OAuthAccount(
            id,
            userId,
            lastUsedAt,
            auth,
        );
    }
}