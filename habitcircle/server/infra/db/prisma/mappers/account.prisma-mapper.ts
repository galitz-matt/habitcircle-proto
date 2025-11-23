import { Account } from "@/server/domain/entities/account.entity";
import { CredentialsAuthentication } from "@/server/domain/entities/credentials-auth.entity";
import { OAuthAuthentication } from "@/server/domain/entities/oauth-auth.entity";
import { OAuthIdentity } from "@/server/domain/value-objects/auth/oauth-identity.value-object";
import { OAuthTokens } from "@/server/domain/value-objects/auth/oauth-tokens.value-object";
import { Password } from "@/server/domain/value-objects/auth/password.value-object";
import { Account as AccountRecord } from "@/server/infra/db/prisma/generated";
import { CredentialsAuthDto, OAuthAuthDto } from "@/server/domain/dtos/auth/authentication.dto";
import { AccountPersistenceDto, CredentialsAccountPersistenceDto, OAuthAccountPersistenceDto } from "../../dtos/account-persistence.dto";

export class AccountPrismaMapper {
    toDomain(record: AccountRecord): Account {
        switch (record.authType) {
            case "CREDENTIALS":
                return this.toDomainWithCredentials(record);
            case "OAUTH":
                return this.toDomainWithOAuth(record);
            default:
                throw new Error("Account data is corrupted");
        }
    }

    toPersistence(account: Account): AccountPersistenceDto {
        const authInfo = account.getAuthInfo()
        switch (authInfo.type) {
            case "CREDENTIALS":
                return this.toCredentialsAccountPersistenceDto(account);
            case "OAUTH":
                return this.toOAuthAccountPersistenceDto(account);
            default:
                throw new Error("Account data is corrupted")
        }
    }

    private toDomainWithCredentials(record: AccountRecord): Account {
        return Account.rehydrate({
            id: record.id,
            userId: record.userId,
            auth: CredentialsAuthentication.rehydrate({
                password: Password.rehydrate(record.hashedPassword as string),
                passwordVersion: record.passwordVersion as number,
                failedAttempts: record.failedAttempts as number,
                emailVerified: record.emailVerified as boolean
            })
        });
    }

    private toDomainWithOAuth(record: AccountRecord): Account {
        return Account.rehydrate({
            id: record.id,
            userId: record.userId,
            auth: OAuthAuthentication.rehydrate({
                identity: OAuthIdentity.rehydrate(
                    record.provider as string,
                    record.providerAccountId as string
                ),
                tokens: OAuthTokens.rehydrate(
                    record.accessToken as string,
                    record.refreshToken as string,
                    record.expiresAt as Date
                )
            })
        });
    }

    private toCredentialsAccountPersistenceDto(account: Account): CredentialsAccountPersistenceDto {
        const authInfo = account.getAuthInfo() as CredentialsAuthDto;

        return {
            id: account.id,
            userId: account.userId,
            authType: authInfo.type,
            hashedPassword: authInfo.password,
            passwordVersion: authInfo.passwordVersion,
            failedAttempts: authInfo.failedAttempts,
            emailVerified: authInfo.emailVerified,

            provider: null,
            providerAccountId: null,
            accessToken: null,
            refreshToken: null,
            expiresAt: null
        }
    }

    private toOAuthAccountPersistenceDto(account: Account): OAuthAccountPersistenceDto {
        const authInfo = account.getAuthInfo() as OAuthAuthDto;

        return {
            id: account.id,
            userId: account.userId,
            authType: authInfo.type,
            provider: authInfo.identity.provider,
            providerAccountId: authInfo.identity.providerAccountId,
            accessToken: authInfo.token.accessToken,
            refreshToken: authInfo.token.refreshToken ?? null,
            expiresAt: authInfo.token.expiresAt ?? null,

            hashedPassword: null,
            passwordVersion: null,
            failedAttempts: null,
            emailVerified: null
        }
    }
}
