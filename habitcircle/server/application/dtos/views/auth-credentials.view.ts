export type AuthenticationCredentialsView = {
    userId: string;
    hashedPassword: string;
    failedAttempts: number;
}