import { OAuthAccount } from "@/server/domain/entities/auth/oauth-account.entity";
import { OAuthAccount as OAuthAccountRecord } from "../generated";
import { OAuthIdentity } from "@/server/domain/value-objects/auth/oauth-identity.value-object";
import { OAuthTokens } from "@/server/domain/value-objects/auth/oauth-tokens.value-object";
import { OAuthAccountPrismaDto } from "../dtos/oauth-account-prisma.dto";

export class OAuthAccountPrismaMapper {
    static toDomain(record: OAuthAccountRecord): OAuthAccount {
        return OAuthAccount.rehydrate(
            record.id,
            record.lastUsedAt,
            OAuthIdentity.rehydrate(
                record.provider,
                record.providerAccountId
            ),
            OAuthTokens.rehydrate(
                record.accessToken ?? undefined,
                record.refreshToken ?? undefined,
                record.expiresAt ?? undefined
            )
        )
    }

    static toPersistence(oauthAccount: OAuthAccount): OAuthAccountPrismaDto {
        return {
            id: oauthAccount.id,
            lastUsedAt: oauthAccount.lastUsedAt,
            provider: oauthAccount.provider,
            providerAccountId: oauthAccount.providerAccountId,
            accessToken: oauthAccount.accessToken,
            refreshToken: oauthAccount.refreshToken,
            expiresAt: oauthAccount.expiresAt
        }
    }
}