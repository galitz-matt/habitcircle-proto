import { DomainAuthType } from "../../types/auth-type";
import { OAuthIdentityDto } from "./oauth-identity.dto";
import { OAuthTokenDto } from "./oauth-token.dto";

export type AuthenticationDto = 
    | CredentialsAuthDto
    | OAuthAuthDto

export type CredentialsAuthDto = {
    type: DomainAuthType.CREDENTIALS;
    password: string;
    passwordVersion: number;
    failedAttempts: number;
    emailVerified: boolean;
}

export type OAuthAuthDto = {
    type: DomainAuthType.OAUTH;
    identity: OAuthIdentityDto;
    token: OAuthTokenDto;
}