import type { Circle } from "@/server/domain/entities/circle.entity";
import { CircleRepository } from "@/server/domain/repositories/circle.repository";
import { CirclePrismaMapper } from "@/server/infrastructure/db/mappers/circle.prisma-mapper";
import type { PrismaClient } from "@/generated/prisma";

export class CirclePrismaRepository implements CircleRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async findById(id: string): Promise<Circle | null> {
        const circleRecord = await this.prisma.circle.findUnique({
            where: { id : id },
            include: { owner: true, members: true, habits: true }
        });

        return circleRecord ? CirclePrismaMapper.toDomain(circleRecord) : null;
    }

    async findByName(name: string): Promise<Circle[]> {
        const circleRecords = await this.prisma.circle.findMany({
            where: { name: name },
            include: { owner: true, members: true, habits: true }
        });

        return circleRecords?.map(CirclePrismaMapper.toDomain) ?? [];
    }

    async findByUserId(userId: string): Promise<Circle[]> {
        const userRecord = await this.prisma.user.findUnique({
            where: { id: userId },
            include: { 
                circles: {
                    include: { owner: true, members: true, habits: true}
                } 
            }
        });

        return userRecord?.circles.map(CirclePrismaMapper.toDomain) ?? [];
    }

    async findAll(): Promise<Circle[]> {
        const circleRecords = await this.prisma.circle.findMany({
            include: { owner: true, members: true, habits: true }
        });
        return circleRecords.map(CirclePrismaMapper.toDomain);
    }

    async save(circle: Circle): Promise<void> {
        const base = CirclePrismaMapper.toPersistence(circle);

        await this.prisma.circle.upsert({
            where: { id: circle.id },
            create: {
                ...base,
                owner: { connect: { id: circle.getOwner().id } },
                members: { connect: circle.members.getAll().map(m => ({ id: m.id })) },
                habits: { connect: circle.habits.getAll().map(h => ({ id: h.id })) }
            },
            update: {
                ...base,
                owner: { connect: { id: circle.getOwner().id }},
                members: { set: circle.members.getAll().map(m => ({ id: m.id })) },
                habits: { set: circle.habits.getAll().map(h => ({ id: h.id })) }
            }
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.habit.deleteMany({
            where: { circleId: id },
        });
        
        await this.prisma.circle.delete({
            where: { id: id }
        }).catch((err) => {
            if (err.code !== "P2025") throw new Error(`Circle with id ${id} not found`);
        });
    }
}