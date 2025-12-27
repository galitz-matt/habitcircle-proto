import type { PrismaClient } from "@/prisma/generated";
import { UserRepository } from "@/server/application/repositories/user.repository";
import { UserPrismaMapper } from "@/server/infra/prisma/mappers/user.prisma-mapper";
import type { User } from "@/server/domain/entities/user.entity";
import type { Username } from "@/server/domain/value-objects/user/username.value-object";
import { DuplicateError, NotFoundError } from "@/lib/errors";

export class UserPrismaRepository implements UserRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async findById(id: string): Promise<User | null> {
        const userRecord = await this.prisma.user.findUnique({
            where: { id },
            include: { oauthAccounts: true, credentialsAccount: true }
        });
        return userRecord ? UserPrismaMapper.toDomain(userRecord) : null; 
    }

    async findByUsername(username: Username): Promise<User | null> {
        const userRecord = await this.prisma.user.findUnique({
            where: { username: username.toString() },
            include: { oauthAccounts: true, credentialsAccount: true }
        });
        return userRecord ? UserPrismaMapper.toDomain(userRecord) : null;
    }

    async create(user: User): Promise<void> {
        const dto = UserPrismaMapper.toPersistence(user);

        await this.prisma.user.create({
            data: {
                ...dto.scalars,
                credentialsAccount: dto.credentialsAccount
                    ? { create: dto.credentialsAccount }
                    : undefined,
                oauthAccounts: dto.oauthAccounts.length > 0
                    ? { create: dto.oauthAccounts }
                    : undefined
            }
        }).catch((err) => {
            if (err.code === "P2002") {
                const target = err.meta?.target?.[0] ?? "unknown field";
                throw new DuplicateError(`User already exists with duplicate ${target}`);
            }
            throw err;
        });
    }

    async update(user: User): Promise<void> {
        const dto = UserPrismaMapper.toPersistence(user);

        await this.prisma.$transaction(async (tx) => {
            await tx.user.update({
                where: { id: dto.scalars.id },
                data: {
                    username: dto.scalars.username,
                    biography: dto.scalars.biography,
                    profilePictureKey: dto.scalars.profilePictureKey
                }
            });

            if (dto.credentialsAccount) {
                await tx.credentialsAccount.upsert({
                    where: { userId: dto.scalars.id },
                    create: {
                        ...dto.credentialsAccount,
                        user: { connect: { id: dto.scalars.id }}
                    },
                    update: {
                        hashedPassword: dto.credentialsAccount.hashedPassword,
                        passwordVersion: dto.credentialsAccount.passwordVersion,
                        emailAddress: dto.credentialsAccount.emailAddress,
                        emailVerified: dto.credentialsAccount.emailVerified,
                        failedAttempts: dto.credentialsAccount.failedAttempts
                    }
                });
            }

            for (const oa of dto.oauthAccounts) {
                await tx.oAuthAccount.upsert({
                    where: { id: oa.id },
                    create: {
                        ...oa,
                        user: { connect: { id: dto.scalars.id } }
                    },
                    update: {
                        accessToken: oa.accessToken,
                        refreshToken: oa.refreshToken,
                        expiresAt: oa.expiresAt,
                        emailAddress: oa.emailAddress,
                        emailVerified: oa.emailVerified
                    }
                })
            }
        })
    }

    async delete(id: string): Promise<void> {
        await this.prisma.user.delete({
            where: { id }
        }).catch((err) => {
            if (err.code === "P2025") 
                throw new NotFoundError(`User with id ${id} not found`);
            throw err;
        });
    }
}