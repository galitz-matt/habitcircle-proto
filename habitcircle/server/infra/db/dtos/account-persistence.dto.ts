import { DomainAuthType } from "@/server/domain/types/auth-type"

export type AccountPersistenceDto = 
    | CredentialsAccountPersistenceDto
    | OAuthAccountPersistenceDto

export type CredentialsAccountPersistenceDto = {
    id: string
    userId: string
    authType: DomainAuthType.CREDENTIALS

    hashedPassword: string
    passwordVersion: number
    failedAttempts: number
    emailVerified: boolean

    provider: null
    providerAccountId: null
    accessToken: null
    refreshToken: null
    expiresAt: null
}

export type OAuthAccountPersistenceDto = {
    id: string
    userId: string
    authType: DomainAuthType.OAUTH

    hashedPassword: null
    passwordVersion: null
    failedAttempts: null
    emailVerified: null

    provider: string
    providerAccountId: string
    accessToken: string
    refreshToken: string | null
    expiresAt: Date | null
}
