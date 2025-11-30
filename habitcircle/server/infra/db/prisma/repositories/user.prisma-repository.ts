import type { PrismaClient } from "@/prisma/generated";
import { UserRepository } from "@/server/application/repositories/user.repository";
import { UserPrismaMapper } from "@/server/infra/db/prisma/mappers/user.prisma-mapper";
import type { User } from "@/server/domain/entities/user.entity";
import type { Username } from "@/server/domain/value-objects/username.value-object";
import { NotFoundError } from "@/lib/errors";

export class UserPrismaRepository implements UserRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async findById(id: string): Promise<User | null> {
        const userRecord = await this.prisma.user.findUnique({
            where: { id: id }
        });
        return userRecord ? UserPrismaMapper.toDomain(userRecord) : null; 
    }

    async findByUsername(username: Username): Promise<User | null> {
        const userRecord = await this.prisma.user.findUnique({
            where: { username: username.toString() }
        });
        return userRecord ? UserPrismaMapper.toDomain(userRecord) : null;
    }

    async create(user: User): Promise<void> {
        const userDto = UserPrismaMapper.toPersistence(user);

        await this.prisma.user.create({
            data: userDto
        });
    }

    async update(user: User): Promise<void> {
        const userDto = UserPrismaMapper.toPersistence(user);

        await this.prisma.user.update({
            where: {
                id: userDto.id,
            },
            data: {
                ...userDto,
                updatedAt: new Date(),
            }
        });
    }

    async delete(user: User): Promise<void> {
        await this.prisma.user.delete({
            where: { id: user.id }
        }).catch((err) => {
            if (err.code === "P2025") throw new NotFoundError(`User with id ${user.id} not found`);
            throw err;
        });
    }
}