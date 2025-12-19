export type OAuthAccountPrismaDto = {
    id: string;
    lastUsedAt: Date;
    provider: string;
    providerAccountId: string;
    accessToken?: string;
    refreshToken?: string;
    expiresAt?: Date;
}