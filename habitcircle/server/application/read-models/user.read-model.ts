import type { User } from "@/server/domain/entities/user.entity";

export interface UserReadModel {
    findUsersByVerifiedOAuthEmailAddress(emailAddress: string): Promise<User[]>;
    findUserByOAuthIdentity(provider: string, providerAccountId: string): Promise<User | null>;
}