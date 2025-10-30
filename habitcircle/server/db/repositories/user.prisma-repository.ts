import { PrismaClient } from "@/generated/prisma";
import { UserRepository } from "@/server/domain/repositories/user.repository";
import { UserMapper } from "@/server/db/mappers/user.mapper";
import { User } from "@/server/domain/entities/user.entity";

export class UserPrismaRepository implements UserRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async findById(id: string): Promise<User | null> {
        const userRecord = await this.prisma.user.findUnique({
            where: { id: id }
        })

        return userRecord ? UserMapper.toDomain(userRecord) : null;
    }

    async findByUsername(username: string): Promise<User | null> {
        const userRecord = await this.prisma.user.findUnique({
            where: { username: username}
        })

        return userRecord ? UserMapper.toDomain(userRecord) : null;
    }

    async findAll(): Promise<User[]> {
        const userRecords = await this.prisma.user.findMany();
        return userRecords.map(UserMapper.toDomain);
    }

    async save(user: User): Promise<void> {
        const userRecord = UserMapper.toPrisma(user);

        await this.prisma.user.upsert({
            where: { id: userRecord.id },
            create: userRecord,
            update: {
                username: userRecord.username,
                password: userRecord.password
            },
        }).catch((err) => {
            if (err.code === "P2002") {
                throw new Error(`Username ${userRecord.username} already exists`);
            }
            throw err;
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.user.delete({
            where: { id: id }
        }).catch((err) => {
            if (err.code !== "P2025") throw err;
        });
    }
}