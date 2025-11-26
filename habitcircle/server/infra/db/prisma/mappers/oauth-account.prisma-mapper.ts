import { OAuthAccount } from "@/server/domain/entities/auth/oauth-account.entity";
import { OAuthAccount as OAuthAccountRecord } from "../generated";
import { OAuthAuthentication } from "@/server/domain/entities/auth/oauth-auth.entity";
import { OAuthIdentity } from "@/server/domain/value-objects/auth/oauth-identity.value-object";
import { OAuthTokens } from "@/server/domain/value-objects/auth/oauth-tokens.value-object";
import { OAuthAccountPersistenceDto } from "../../dtos/oauth-account-persistence.dto";

export class OAuthAccountPrismaMapper {
    toDomain(record: OAuthAccountRecord): OAuthAccount {
        return OAuthAccount.rehydrate(
            record.id,
            record.userId,
            OAuthAuthentication.rehydrate(
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
        )
    }

    toPersistence(oauthAccount: OAuthAccount): OAuthAccountPersistenceDto {
        return {
            id: oauthAccount.id,
            userId: oauthAccount.userId,
            provider: oauthAccount.provider,
            providerAccountId: oauthAccount.providerAccountId,
            accessToken: oauthAccount.accessToken ?? null,
            refreshToken: oauthAccount.refreshToken ?? null,
            expiresAt: oauthAccount.expiresAt ?? null
        }
    }
}