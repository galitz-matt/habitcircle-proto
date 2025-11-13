import { StringUtils } from "@/lib/utils";

export class ExternalIdentity {
    private constructor(
        private readonly provider: string,
        private readonly providerAccountId: string
    ) {}

    static create(provider: string, providerAccountId: string): ExternalIdentity {
        if (!!provider || !!providerAccountId) {
            throw new Error("Extenal Identity must include provider and providerAccountId");
        }

        const normalizedProvider = StringUtils.normalize(provider).toLowerCase();
        return new ExternalIdentity(normalizedProvider, providerAccountId);
    }

    getProvider(): string {
        return this.provider;
    }

    getProviderAccountId(): string {
        return this.providerAccountId;
    }
}