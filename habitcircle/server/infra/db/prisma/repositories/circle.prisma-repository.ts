import type { Circle } from "@/server/domain/entities/circle/circle.entity";
import { CircleRepository } from "@/server/application/repositories/circle.repository";
import { CirclePrismaMapper } from "@/server/infra/db/prisma/mappers/circle.prisma-mapper";
import { PrismaClient } from "@/prisma/generated";
import { DuplicateError, NotFoundError } from "@/lib/errors";
import { CircleName } from "@/server/domain/value-objects/circle/circle-name.value-object";

export class CirclePrismaRepository implements CircleRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async findById(id: string): Promise<Circle | null> {
        const circleRecord = await this.prisma.circle.findUnique({
            where: { id },
            include: { owner: true, members: true, habits: true }
        });
        return circleRecord ? CirclePrismaMapper.toDomain(circleRecord) : null;
    }

    async findByCircleName(name: CircleName): Promise<Circle[]> {
        const circleRecords = await this.prisma.circle.findMany({
            where: { name: name.toString() },
            include: { owner: true, members: true, habits: true }
        });
        return circleRecords.map(CirclePrismaMapper.toDomain);
    }

    async create(circle: Circle): Promise<void> {
        const dto = CirclePrismaMapper.toPersistenceForCreate(circle);

        await this.prisma.circle.create({
            data: {
                ...dto.scalars,
                ownerId: dto.ownerId,
                members: {
                    connect: dto.memberIds
                },
                habits: {
                    create: dto.habits
                }
                
            },
        }).catch((err) => {
            if (err.code === "P2002") {
                const target = err.meta?.target?.[0]
                throw new DuplicateError(`Circle already exists with duplicate ${target}`);
            }
            throw err;
        });
    }

    async update(circle: Circle): Promise<void> {
        const existingHabits = await this.prisma.habit.findMany({ where: { circleId: circle.id} });
        const dto = CirclePrismaMapper.toPersistenceForUpdate(circle, existingHabits);

        await this.prisma.circle.update({
            where: { id: dto.scalars.id },
            data: {
                ...dto.scalars,
                members: { set: dto.memberIds },
                habits: {
                    upsert: dto.habitsToUpsert,
                    deleteMany: dto.habitIdsToDelete
                }
            },
        }).catch((err) => {
            if (err.code === "P2025")
                throw new NotFoundError(`Circle with id ${circle.id} not found`);
            throw err;
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.circle.delete({
            where: { id }
        }).catch((err) => {
            if (err.code === "P2025")
                throw new NotFoundError(`Circle with id ${id} not found`);
            throw err;
        });
    }
}