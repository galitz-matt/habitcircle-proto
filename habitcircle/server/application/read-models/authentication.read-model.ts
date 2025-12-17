import { AuthenticationCredentialsView } from "@/server/application/dtos/views/auth-credentials.view";

export interface AuthenticationReadModel {
    findAuthenticationCredentialsByUsername(username: string): Promise<AuthenticationCredentialsView | null> 
}