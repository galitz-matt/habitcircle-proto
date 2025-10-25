import { Circle } from "@server/domain/entities/circle.entity";
import { CircleRepository } from "@server/domain/repositories/circle.repository";
import { CircleMapper } from "../mappers/circle.mapper";
import { PrismaClient } from "@generated/prisma";

export class CirclePrismaRepository implements CircleRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async findById(id: string): Promise<Circle | null> {
        const circleRecord = await this.prisma.circle.findUnique({
            where: { id : id },
            include: { owner: true, members: true, habits: true }
        });

        return circleRecord ? CircleMapper.toDomain(circleRecord) : null;
    }

    async findByName(name: string): Promise<Circle[]> {
        const circleRecords = await this.prisma.circle.findMany({
            where: { name: name },
            include: { owner: true, members: true, habits: true }
        });

        return circleRecords?.map(CircleMapper.toDomain) ?? [];
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

        return userRecord?.circles.map(CircleMapper.toDomain) ?? [];
    }

    async findAll(): Promise<Circle[]> {
        const circleRecords = await this.prisma.circle.findMany({
            include: { owner: true, members: true, habits: true }
        });
        return circleRecords.map(CircleMapper.toDomain);
    }

    async save(circle: Circle): Promise<void> {
        const base = CircleMapper.toPrisma(circle);

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
        await this.prisma.circle.delete({
            where: { id: id }
        }).catch((err) => {
            if (err.code !== "P2025") throw err;
        });
    }
}