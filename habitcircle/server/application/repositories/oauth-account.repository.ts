import { OAuthAccount } from "@/server/domain/entities/auth/oauth-account.entity";

export interface OAuthAccountRepository {
    findById(id: string): Promise<OAuthAccount | null>;
    findByUserId(userId: string): Promise<OAuthAccount | null>;
    save(account: OAuthAccount): Promise<void>;
    delete(id: string): Promise<void>;
}