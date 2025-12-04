import type { PrismaClient } from "@/prisma/generated";
import { UserRepository } from "@/server/application/repositories/user.repository";
import { UserPrismaMapper } from "@/server/infra/db/prisma/mappers/user.prisma-mapper";
import type { User } from "@/server/domain/entities/user.entity";
import type { Username } from "@/server/domain/value-objects/username.value-object";
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
        const { user: u, credentialsAccount, oauthAccounts } = UserPrismaMapper.toPersistence(user);

        await this.prisma.user.create({
            data: {
                ...u,
                credentialsAccount: credentialsAccount
                    ? { create: credentialsAccount }
                    : undefined,
                oauthAccounts: {
                    create: oauthAccounts
                }
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
        const { user: u, credentialsAccount, oauthAccounts } = UserPrismaMapper.toPersistence(user);

        const data = {
            username: u.username,
            emailAddress: u.emailAddress,
            biography: u.biography,
            profilePictureKey: u.profilePictureKey,
            updatedAt: new Date(),

            credentialsAccount: {},
            oauthAccounts: {},
        };

        if (credentialsAccount) {
            data.credentialsAccount = {
                upsert: {
                    create: credentialsAccount,
                    update: credentialsAccount
                },
            };
        } else {
            data.credentialsAccount = {
                delete: true,
            };
        }

        data.oauthAccounts = {
            deleteMany: {},
            create: oauthAccounts,
        };

        await this.prisma.user.update({
            where: { id: u.id },
            data,
        }).catch((err) => {
            if (err.code === "P2025")
                throw new NotFoundError(`User with id ${u.id} not found`);
            throw err;
        });
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