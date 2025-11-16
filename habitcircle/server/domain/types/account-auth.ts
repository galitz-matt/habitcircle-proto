import { CredentialsAuthentication } from "@/server/domain/value-objects/auth/credentials-auth.value-object"
import { OAuthAuthentication } from "@/server/domain/value-objects/auth/oauth-auth.value-object"

export type AccountAuth =
    | CredentialsAuthentication
    | OAuthAuthentication