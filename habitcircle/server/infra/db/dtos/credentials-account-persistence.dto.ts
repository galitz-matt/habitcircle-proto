export type CredentialsAccountPersistenceDto = {
    id: string,
    userId: string,
    password: string,
    passwordVersion: number,
    failedAttempts: number,
    emailVerified: boolean
}