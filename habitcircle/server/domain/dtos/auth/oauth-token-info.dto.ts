export type OAuthTokenInfo = {
    accessToken: string;
    refreshToken?: string;
    expiresAt?: Date;
}