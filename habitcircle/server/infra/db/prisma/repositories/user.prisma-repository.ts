import type { PrismaClient } from "@/prisma/generated";
import { UserRepository } from "@/server/application/repositories/user.repository";
import { UserPrismaMapper } from "@/server/infra/db/prisma/mappers/user.prisma-mapper";
import type { User } from "@/server/domain/entities/user.entity";
import { NotFoundError } from "@/lib/errors";
import type { Username } from "@/server/domain/value-objects/username.value-object";

export class UserPrismaRepository implements UserRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async findById(id: string): Promise<User> {
        const userRecord = await this.prisma.user.findUnique({
            where: { id: id }
        })
        if (!userRecord) throw new NotFoundError(`User with id ${id} not found`);

        return UserPrismaMapper.toDomain(userRecord);
    }

    async findByUsername(username: Username): Promise<User | null> {
        const userRecord = await this.prisma.user.findUnique({
            where: { username: username.toString() }
        })
        if (!userRecord)
            return null;

        return UserPrismaMapper.toDomain(userRecord);
    }

    async findAll(): Promise<User[]> {
        const userRecords = await this.prisma.user.findMany();
        return userRecords.map(UserPrismaMapper.toDomain);
    }

    async save(user: User): Promise<void> {
        const userRecord = UserPrismaMapper.toPersistence(user);

        await this.prisma.user.upsert({
            where: { id: userRecord.id },
            create: userRecord,
            update: {
                username: userRecord.username,
            },
        }).catch((err) => {
            if (err.code === "P2002") {
                throw new Error(`Username "${userRecord.username}" is taken`);
            }
            throw err;
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.user.delete({
            where: { id: id }
        }).catch((err) => {
            if (err.code === "P2025") throw new Error(`User with id ${id} not found`);
            throw err;
        });
    }
}