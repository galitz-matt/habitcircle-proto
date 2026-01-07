import { StringUtils } from "@/server/lib/utils";

export type CreateOAuthIdentityProps = {
    provider: string,
    providerAccountId: string
}

export class OAuthIdentity {
    private constructor(
        readonly provider: string,
        readonly providerAccountId: string
    ) {
        Object.freeze(this);
    }

    static create(props: CreateOAuthIdentityProps): OAuthIdentity {
        const normalizedProvider = StringUtils.normalize(props.provider).toLowerCase();
        return new OAuthIdentity(normalizedProvider, props.providerAccountId);
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