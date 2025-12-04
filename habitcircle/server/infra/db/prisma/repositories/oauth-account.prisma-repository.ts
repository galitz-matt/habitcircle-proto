import { OAuthAccountRepository } from "@/server/application/repositories/oauth-account.repository";
import { PrismaClient } from "../generated";
import { OAuthAccount } from "@/server/domain/entities/auth/oauth-account.entity";
import { OAuthAccountPrismaMapper } from "../mappers/oauth-account.prisma-mapper";
import { DuplicateError, NotFoundError } from "@/lib/errors";

export class OAuthAccountPrismaRepository implements OAuthAccountRepository {
    constructor(private readonly prisma: PrismaClient) {}
    
    async findById(id: string): Promise<OAuthAccount | null> {
        const accountRecord = await this.prisma.oAuthAccount.findUnique({
            where: { id }
        });
        return accountRecord ? OAuthAccountPrismaMapper.toDomain(accountRecord) : null;
    }

    async findByUserId(userId: string): Promise<OAuthAccount[]> {
        const accountRecords = await this.prisma.oAuthAccount.findMany({
            where: { userId }
        });
        return accountRecords.map(OAuthAccountPrismaMapper.toDomain);
    }

    async create(account: OAuthAccount): Promise<void> {
        const accountDto = OAuthAccountPrismaMapper.toPersistence(account);
        await this.prisma.oAuthAccount.create({
            data: accountDto
        }).catch((err) => {
            if (err.code === "P2002") {
                const target = err.meta?.target?.[0] ?? "unknown field";
                throw new DuplicateError(`OAuthAccount already exists with duplicate ${target}`);
            }
            throw err;
        })
    }

    async update(account: OAuthAccount): Promise<void> {
        const accountDto = OAuthAccountPrismaMapper.toPersistence(account);
        const { id, ...mutableFields } = accountDto;

        await this.prisma.oAuthAccount.update({
            where: { id },
            data: {
                ...mutableFields,
                updatedAt: new Date(),
            },
        }).catch((err) => {
            if (err.code === "P2025")
                throw new NotFoundError(`OAuthAccount with id ${id} not found`);
            throw err;
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.oAuthAccount.delete({
            where: { id }
        }).catch((err) => {
            if (err.code === "P2025")
                throw new NotFoundError(`OAuthAccount with id ${id} not found`);
            throw err;
        });
    }
}