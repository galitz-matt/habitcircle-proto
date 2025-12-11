export type CredentialsAccountPrismaDto = {
    scalars: {
        id: string;
        hashedPassword: string;
        passwordVersion: string;
        failedAttempts: number;
        emailVerified: boolean;
    }
    userId: string;
}