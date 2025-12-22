export type CredentialsAccountPrismaDto = {
    id: string;
    hashedPassword: string;
    passwordVersion: number;
    failedAttempts: number;
    emailAddress: string;
    emailVerified: boolean;
}