import { DomainError } from "@/lib/errors";
import { OAuthAccount } from "../../entities/auth/oauth-account.entity";

export class OAuthAccountManager {
    private constructor(
        readonly accountsMap: Map<string, OAuthAccount>
    ) {
        Object.freeze(accountsMap);
        Object.freeze(this);
    }

    static create(accounts: OAuthAccount[]): OAuthAccountManager {
        if (this.containsDuplicateProviders(accounts)) {
            throw new DomainError("Only one OAuthAccount per provider is allowed");
        }
        return new OAuthAccountManager(this.toMap(accounts));
    }

    addAccount(account: OAuthAccount): OAuthAccountManager {
        return OAuthAccountManager.create(
            [...this.accountsMap.values(), account ]
        )
    } 

    removeAccount(account: OAuthAccount): OAuthAccountManager {
        const clone = new Map(this.accountsMap);
        clone.delete(account.provider);
        return new OAuthAccountManager(clone);
    }

    get accounts(): OAuthAccount[] {
        return [ ...this.accountsMap.values() ];
    }

    static rehydrate(accounts: OAuthAccount[]): OAuthAccountManager {
        return new OAuthAccountManager(this.toMap(accounts));
    }

    private static containsDuplicateProviders(accounts: OAuthAccount[]): boolean {
        const providers = new Set<string>(accounts.map(a => a.provider));
        return providers.size !== accounts.length;
    }


    private static toMap(accounts: OAuthAccount[]): Map<string, OAuthAccount> {
        return new Map(
            accounts.map(a => [a.provider, a])
        );
    }
}