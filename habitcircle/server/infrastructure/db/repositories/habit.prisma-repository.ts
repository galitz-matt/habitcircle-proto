import type { PrismaClient } from "@/generated/prisma";
import { HabitRepository } from "@/server/domain/repositories/habit.repository";
import { HabitPrismaMapper } from "@/server/infrastructure/db/mappers/habit.prisma-mapper";
import type { Habit } from "@/server/domain/entities/habit.entity";

export class HabitPrismaRepository implements HabitRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async findById(id: string): Promise<Habit | null> {
        const habitRecord = await this.prisma.habit.findUnique({
            where: { id: id },
        })

        return habitRecord ? HabitPrismaMapper.toDomain(habitRecord) : null;
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
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.habit.delete({
            where: { id: id }
        }).catch((err) => {
            if (err.code !== "P2025") throw Error(`Habit with id ${id} not found`);
        });
    }
}