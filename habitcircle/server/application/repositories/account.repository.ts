import type { Account } from "@/server/domain/entities/account.entity";
import type { OAuthIdentity } from "@/server/domain/value-objects/auth/oauth-identity.value-object";
import type { Username } from "@/server/domain/value-objects/username.value-object";

export interface AccountRepository {
    findById(id: string): Promise<Account | null>;
    findByUserId(userId: string): Promise<Account[]>
    findByUsername(username: Username): Promise<Account | null>;
    findByIdentity(identity: OAuthIdentity): Promise<Account | null>;
    save(account: Account): Promise<void>;
    delete(account: Account): Promise<void>;
}