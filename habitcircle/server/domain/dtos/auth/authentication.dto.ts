import { DomainAuthType } from "../../types/auth-type";
import { OAuthIdentityDto } from "./oauth-identity.dto";
import { OAuthTokenDto } from "./oauth-token.dto";

export type AuthDto = 
    | {
        type: DomainAuthType.CREDENTIALS;
        failedAttempts: number;
        emailVerified: boolean;
    }
    | {
        type: DomainAuthType.OAUTH;
        identityInfo: OAuthIdentityDto;
        tokenInfo: OAuthTokenDto;
    }