import { StringUtils } from "@/lib/utils";

export class OAuthIdentity {
    private constructor(
        readonly provider: string,
        readonly providerAccountId: string
    ) {}

    static create(provider: string, providerAccountId: string): OAuthIdentity {
        if (!provider || !providerAccountId) {
            throw new Error("Extenal Identity must include provider and providerAccountId");
        }

        const normalizedProvider = StringUtils.normalize(provider).toLowerCase();
        return new OAuthIdentity(normalizedProvider, providerAccountId);
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