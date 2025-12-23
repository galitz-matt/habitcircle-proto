export type LinkSession = {
    token: string;
    allowedProviders: string[]
    issuedAt: string, // ISO String
    expiresAt: string, // ISO String
}