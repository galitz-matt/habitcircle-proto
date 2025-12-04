import type { PrismaClient } from "@/prisma/generated";
import { HabitRepository } from "@/server/application/repositories/habit.repository";
import { HabitPrismaMapper } from "@/server/infra/db/prisma/mappers/habit.prisma-mapper";
import type { Habit } from "@/server/domain/entities/habit.entity";
import { DuplicateError, NotFoundError } from "@/lib/errors";

export class HabitPrismaRepository implements HabitRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async findById(id: string): Promise<Habit | null> {
        const habitRecord = await this.prisma.habit.findUnique({
            where: { id },
        });
        return habitRecord ? HabitPrismaMapper.toDomain(habitRecord) : null;
    }

    async findByCircleId(circleId: string): Promise<Habit[]> {
        const habitRecords = await this.prisma.habit.findMany({
            where: { circleId }
        });
        return habitRecords.map(HabitPrismaMapper.toDomain)
    }

    async create(habit: Habit): Promise<void> {
        const habitDto = HabitPrismaMapper.toPersistence(habit);

        await this.prisma.habit.create({
            data: habitDto,
        }).catch((err) => {
            if (err.code === "P2002") {
                const target = err.meta?.target?.[0];
                throw new DuplicateError(`Habit already exists with duplicate ${target}`);
            }
            throw err;
        });
    }

    async update(habit: Habit): Promise<void> {
        const habitDto = HabitPrismaMapper.toPersistence(habit);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { id, createdAt, ...mutableFields } = habitDto;

        await this.prisma.habit.update({
            where: { id },
            data: {
                ...mutableFields,
                updatedAt: new Date(),
            },
        }).catch((err) => {
            if (err.code === "P2025") 
                throw new NotFoundError(`Habit with id ${id} not found`);
            throw err;
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.habit.delete({
            where: { id }
        }).catch((err) => {
            if (err.code === "P2025") 
                throw new NotFoundError(`Habit with id ${id} not found`);
            throw err;
        });
    }
}