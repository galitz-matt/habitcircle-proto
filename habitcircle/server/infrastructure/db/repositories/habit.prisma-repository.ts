import type { PrismaClient } from "@/generated/prisma";
import { HabitRepository } from "@/server/domain/repositories/habit.repository";
import { HabitPrismaMapper } from "@/server/infrastructure/db/mappers/habit.prisma-mapper";
import type { Habit } from "@/server/domain/entities/habit.entity";
import { NotFoundError } from "@/lib/errors";

export class HabitPrismaRepository implements HabitRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async findById(id: string): Promise<Habit> {
        const habitRecord = await this.prisma.habit.findUnique({
            where: { id: id },
        })
        if (!habitRecord) throw new NotFoundError(`Habit with id ${id} not found`);

        return HabitPrismaMapper.toDomain(habitRecord);
    }

    async findByCircleId(circleId: string): Promise<Habit[]> {
        const habitRecords = await this.prisma.habit.findMany({
            where: { circleId: circleId }
        });

        return habitRecords.map(HabitPrismaMapper.toDomain)
    }

    async findAll(): Promise<Habit[]> {
        const habitRecords = await this.prisma.habit.findMany();
        return habitRecords.map(HabitPrismaMapper.toDomain);
    }

    async save(habit: Habit): Promise<void> {
        const habitRecord = HabitPrismaMapper.toPersistence(habit);

        await this.prisma.habit.upsert({
            where: { id: habitRecord.id },
            create: {
                id: habitRecord.id,
                name: habitRecord.name,
                createdAt: habitRecord.createdAt,
                circle: { connect: { id: habitRecord.circleId } }
            },
            update: {
                name: habitRecord.name,
                circle: { connect: { id: habit.circleId }}
            },
        }).catch((err) => {
            if (err.code === "P2002")
                throw new Error(`Habit w/ name, "${habitRecord.name}" already exists`);
            throw err;
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.habit.delete({
            where: { id: id }
        }).catch((err) => {
            if (err.code === "P2025") 
                throw new NotFoundError(`Habit with id ${id} not found`);
            throw err;
        });
    }

    async deleteMany(ids: string[]): Promise<void> {
        await this.prisma.$transaction(async (tx) => {
            await Promise.all(
                ids.map(async (id) => {
                    await tx.habit.delete({
                        where: { id: id }
                    }).catch((err) => {
                        if (err.code == "P2025") 
                            throw new NotFoundError(`Habit with ${id} not found`);
                        throw err;
                    })
                })
            )
        })
    }
}