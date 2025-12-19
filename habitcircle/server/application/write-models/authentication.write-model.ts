export interface AuthenticationWriteModel {
    updateOAuthLastUsed(
        provider: string,
        providerAccountId: string
    ): Promise<void>;
}