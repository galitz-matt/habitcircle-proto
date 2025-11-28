export type CredentialsAccountPrismaDto = {
    id: string,
    userId: string,
    password: string,
    passwordVersion: number,
    failedAttempts: number,
    emailVerified: boolean
}