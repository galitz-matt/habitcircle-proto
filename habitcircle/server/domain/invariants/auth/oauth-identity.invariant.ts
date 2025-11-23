import { DomainError } from "@/lib/errors";

const OAUTH_PROVIDERS = [
    "google",
    "twitter"
]

export class OAuthIdentityInvariants {
    static enforce(provider: string, providerAccountId: string): void {
        this.ensureValidProvider(provider);
    }

    static ensureValidProvider(provider: string): void {
        if (!OAUTH_PROVIDERS.includes(provider))
            throw new DomainError("Invalid provider");
    }
}