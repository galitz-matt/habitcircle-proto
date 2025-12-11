export type CredentialsAccountPrismaDto = {
    id: string;
    hashedPassword: string;
    passwordVersion: number;
    failedAttempts: number;
    emailVerified: boolean;
}