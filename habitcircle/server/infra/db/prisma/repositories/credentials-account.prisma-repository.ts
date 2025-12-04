import { CredentialsAccountRepository } from "@/server/application/repositories/credentials-account.repository";
import { PrismaClient } from "../generated";
import { CredentialsAccount } from "@/server/domain/entities/auth/credentials-account.entity";
import { CredentialsAccountPrismaMapper } from "../mappers/credentials-account.prisma-mapper";
import { DuplicateError, NotFoundError } from "@/lib/errors";

export class CredentialsAccountPrismaRepository implements CredentialsAccountRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async findById(id: string): Promise<CredentialsAccount | null> {
        const accountRecord = await this.prisma.credentialsAccount.findUnique({
            where: { id },
        });
        return accountRecord ? CredentialsAccountPrismaMapper.toDomain(accountRecord) : null;
    }

    async findByUserId(userId: string): Promise<CredentialsAccount | null> {
        const accountRecord = await this.prisma.credentialsAccount.findUnique({
            where: { userId },
        });
        return accountRecord ? CredentialsAccountPrismaMapper.toDomain(accountRecord) : null;
    }

    async create(account: CredentialsAccount): Promise<void> {
        const accountDto = CredentialsAccountPrismaMapper.toPersistence(account);

        await this.prisma.credentialsAccount.create({
            data: accountDto
        }).catch((err) => {
            if (err.code === "P2002") {
                const target = err.target?.meta?.[0];
                throw new DuplicateError(`CredentialsAccount already exists with duplicate ${target}`);
            }
            throw err;
        });
    }

    async update(account: CredentialsAccount): Promise<void> {
        const accountDto = CredentialsAccountPrismaMapper.toPersistence(account);
        const { id, ...mutableFields } = accountDto;

        await this.prisma.credentialsAccount.update({
            where: { id },
            data: {
                ...mutableFields,
                updatedAt: new Date(),
            },
        }).catch((err) => {
            if (err.code === "P2025")
                throw new NotFoundError(`CredentialsAccount with id ${id} not found`);
            throw err;
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.credentialsAccount.delete({
            where: { id }
        }).catch((err) => {
            if (err.code === "P2025")
                throw new NotFoundError(`CredentialsAccount with id ${id} not found`);
            throw err;
        });
    }
}