import { StringUtils } from "@/lib/utils";
import { OAuthIdentityDto } from "../../dtos/auth/oauth-identity.dto";

export class OAuthIdentity {
    private constructor(
        readonly provider: string,
        readonly providerAccountId: string
    ) {
        Object.freeze(this);
    }

    static create(provider: string, providerAccountId: string): OAuthIdentity {
        const normalizedProvider = StringUtils.normalize(provider).toLowerCase();
        return new OAuthIdentity(normalizedProvider, providerAccountId);
    }

    toInfo(): OAuthIdentityDto {
        return {
            provider: this.provider,
            providerAccountId: this.providerAccountId
        };
    }

    equals(other: OAuthIdentity): boolean {
        return !!other 
        && other.provider == this.provider 
        && other.providerAccountId === this.providerAccountId
    }

    static rehydrate(provider: string, providerAccountId: string): OAuthIdentity {
        return new OAuthIdentity(provider, providerAccountId);
    }
}