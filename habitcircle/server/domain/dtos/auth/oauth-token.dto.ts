export type OAuthTokenDto = {
    accessToken: string;
    refreshToken?: string;
    expiresAt?: Date;
}