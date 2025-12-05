import type { Circle } from "@/server/domain/entities/circle/circle.entity";
import { CircleRepository } from "@/server/application/repositories/circle.repository";
import { CirclePrismaMapper } from "@/server/infra/db/prisma/mappers/circle.prisma-mapper";
import type { PrismaClient } from "@/prisma/generated";
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
        const circleDto = CirclePrismaMapper.toPersistence(circle);
        await this.prisma.circle.create({
            data: {
                ...circleDto,
                members: {
                    connect: circle.getMembers().map(m => ({ id: m.userId }))
                },
                habits: {
                    connect: circle.getHabits().map(h => ({ id: h.id }))
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
        const circleDto = CirclePrismaMapper.toPersistence(circle);
        const { id, ...mutableFields } = circleDto
        await this.prisma.circle.update({
            where: { id },
            data: {
                ...mutableFields,
                updatedAt: new Date(),
                members: {
                    set: circle.getMembers().map(m => ({ id: m.userId }))
                },
                habits: {
                    set: circle.getHabits().map(h => ({ id: h.id }))
                }
            },
        }).catch((err) => {
            if (err.code === "P2025")
                throw new NotFoundError(`Circle with id ${id} not found`);
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