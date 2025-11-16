import type { Circle } from "@/server/domain/entities/circle.entity";
import { CircleRepository } from "@/server/application/repositories/circle.repository";
import { CirclePrismaMapper } from "@/server/infrastructure/db/mappers/circle.prisma-mapper";
import { HabitPrismaMapper } from "@/server/infrastructure/db/mappers/habit.prisma-mapper";
import type { PrismaClient } from "@/generated/prisma";
import { NotFoundError } from "@/lib/errors";

export class CirclePrismaRepository implements CircleRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async findById(id: string): Promise<Circle> {
        const circleRecord = await this.prisma.circle.findUnique({
            where: { id : id },
            include: { owner: true, members: true, habits: true }
        });
        if (!circleRecord) throw new NotFoundError(`Circle with id ${id} not found`);

        return CirclePrismaMapper.toDomain(circleRecord);
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
                joinedCircles: {
                    include: { owner: true, members: true, habits: true }
                } 
            }
        });

        return userRecord?.joinedCircles.map(CirclePrismaMapper.toDomain) ?? [];
    }

    async findAll(): Promise<Circle[]> {
        const circleRecords = await this.prisma.circle.findMany({
            include: { owner: true, members: true, habits: true }
        });
        return circleRecords.map(CirclePrismaMapper.toDomain);
    }

    async save(circle: Circle): Promise<void> {
        const circleRecord = CirclePrismaMapper.toPersistence(circle);

        await this.prisma.circle.upsert({
            where: { id: circle.id },
            create: {
                ...circleRecord,
                owner: { connect: { id: circle.getOwner().id } },
                members: { connect: circle.members.getAll().map(m => ({ id: m.id })) },
                habits: {
                    create: circle.habits.getAll().map(h => HabitPrismaMapper.toPersistence(h)) 
                }
            },
            update: {
                ...circleRecord,
                owner: { connect: { id: circle.getOwner().id }},
                members: { set: circle.members.getAll().map(m => ({ id: m.id })) },
                habits: { 
                    upsert: circle.habits.getAll().map(h => ({
                        where: { id: h.id },
                        create: HabitPrismaMapper.toPersistence(h),
                        update: HabitPrismaMapper.toPersistence(h)
                    }))
                }
            }
        }).catch((err) => {
            if (err.code === "P2002") {
                throw new Error(`Circle w/ name "${circleRecord.name}" already exists`);
            }
            throw err;
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.habit.deleteMany({
            where: { circleId: id },
        });
        
        await this.prisma.circle.delete({
            where: { id: id }
        }).catch((err) => {
            if (err.code === "P2025") throw new NotFoundError(`Circle with id ${id} not found`);
            throw err;
        });
    }
}