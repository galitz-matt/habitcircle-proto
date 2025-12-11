export type CredentialsAccountPrismaDto = {
    scalars: {
        id: string;
        hashedPassword: string;
        passwordVersion: number;
        failedAttempts: number;
        emailVerified: boolean;
    }
}