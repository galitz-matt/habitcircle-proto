export type CredentialsAccountPrismaDto = {
    id: string,
    userId: string,
    hashedPassword: string,
    passwordVersion: number,
    failedAttempts: number,
    emailVerified: boolean
}