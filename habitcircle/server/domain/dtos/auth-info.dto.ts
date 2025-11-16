import { OAuthIdentityInfo } from "./oauth-identity-info.dto";
import { OAuthTokenInfo } from "./oauth-token-info.dto";

export type AuthInfo = 
    | {
        type: "credentials";
        failedAttempts: number;
        emailVerified: boolean;
    }
    | {
        type: "oauth";
        identityInfo: OAuthIdentityInfo;
        tokenInfo: OAuthTokenInfo;
    }