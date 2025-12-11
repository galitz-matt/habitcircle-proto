export type OAuthAccountPrismaDto = {
    scalars: {
        id: string;
        provider: string;
        providerAccountId: string;
        accessToken?: string;
        refreshToken?: string;
        expiresAt?: Date;
    }
    userId: string
}