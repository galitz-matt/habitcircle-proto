import type { OAuthIdentity } from "@/server/domain/value-objects/auth/oauth-identity.value-object";
import type { User } from "@/server/domain/entities/user.entity";

export interface UserReadModel {
    findUserByOAuthEmailAddress(emailAddress: string): Promise<User[]>;
    findUserByOAuthIdentity(oauthIdentity: OAuthIdentity): Promise<User | null>;
}