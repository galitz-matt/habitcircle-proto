export type OAuthAccountPrismaDto = {
    id: string;
    provider: string;
    providerAccountId: string;
    accessToken?: string;
    refreshToken?: string;
    expiresAt?: Date;
}