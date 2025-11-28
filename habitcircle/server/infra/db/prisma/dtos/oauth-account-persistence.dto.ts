export type OAuthAccountPersistenceDto = {
    id: string,
    userId: string,
    provider: string,
    providerAccountId: string,
    accessToken: string | null,
    refreshToken: string | null,
    expiresAt: Date | null
}