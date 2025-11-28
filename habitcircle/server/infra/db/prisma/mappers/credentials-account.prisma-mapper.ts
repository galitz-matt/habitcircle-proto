import { CredentialsAccount } from "@/server/domain/entities/auth/credentials-account.entity";
import { CredentialsAccount as CredentialsAccountRecord } from "../generated";
import { CredentialsAuthentication } from "@/server/domain/entities/auth/credentials-auth.entity";
import { Password } from "@/server/domain/value-objects/auth/password.value-object";
import { CredentialsAccountPrismaDto } from "../dtos/credentials-account-prisma.dto";

export class CredentialsAccountPrismaMapper {
    toDomain(record: CredentialsAccountRecord): CredentialsAccount {
        return CredentialsAccount.rehydrate(
            record.id,
            record.userId,
            CredentialsAuthentication.rehydrate(
                Password.rehydrate(record.hashedPassword),
                record.passwordVersion,
                record.failedAttempts,
                record.emailVerified
            )
        );
    } 

    toPersistence(account: CredentialsAccount): CredentialsAccountPrismaDto {
        return {
            id: account.id,
            userId: account.userId,
            password: account.passwordHash,
            passwordVersion: account.passwordVersion,
            failedAttempts: account.failedAttempts,
            emailVerified: account.emailVerified
        };
    }
}