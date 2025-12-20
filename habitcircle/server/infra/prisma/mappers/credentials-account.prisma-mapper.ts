import { CredentialsAccount } from "@/server/domain/entities/auth/credentials-account.entity";
import { CredentialsAccount as CredentialsAccountRecord } from "../generated";
import { CredentialsAccountPrismaDto } from "../dtos/credentials-account-prisma.dto";

export class CredentialsAccountPrismaMapper {
    static toDomain(record: CredentialsAccountRecord): CredentialsAccount {
        return CredentialsAccount.rehydrate(
            record.id,
            record.hashedPassword,
            record.passwordVersion,
            record.failedAttempts,
            record.emailVerified
        );
    } 

    static toPersistence(account: CredentialsAccount): CredentialsAccountPrismaDto {
        return {
            id: account.id,
            hashedPassword: account.passwordHash,
            passwordVersion: account.passwordVersion,
            failedAttempts: account.failedAttempts,
            emailVerified: account.emailVerified
        };
    }
}