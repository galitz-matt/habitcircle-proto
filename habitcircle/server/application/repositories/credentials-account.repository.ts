import type { CredentialsAccount } from "@/server/domain/entities/auth/credentials-account.entity";

export interface CredentialsAccountRepository {
    findById(id: string): Promise<CredentialsAccount | null>;
    findByUserId(userId: string): Promise<CredentialsAccount | null>;
    create(account: CredentialsAccount): Promise<void>;
    update(account: CredentialsAccount): Promise<void>;
    delete(id: string): Promise<void>;
}