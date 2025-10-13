import { PrismaClient } from "@generated/prisma";
import { HabitRepository } from "@server/domain/habit/habit.repository";
import { HabitMapper } from "../mappers/habit.mapper";
import { Habit } from "@server/domain/habit/habit.entity";

export class HabitPrismaRepository implements HabitRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async findById(id: string): Promise<Habit | null> {
        const habitRecord = await this.prisma.habit.findUnique({
            where: { id: id },
        })

        return habitRecord ? HabitMapper.toDomain(habitRecord) : null;
    }

    async findByCircleId(circleId: string): Promise<Habit[]> {
        const habits = await this.prisma.habit.findMany({
            where: { circleId: circleId }
        });

        return habits.map(HabitMapper.toDomain)
    }

    async save(habit: Habit): Promise<void> {
        const habitRecord = HabitMapper.toPrisma(habit);

        await this.prisma.habit.upsert({
            where: { id: habitRecord.id },
            update: habitRecord,
            create: habitRecord
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.habit.delete({
            where: { id: id }
        }).catch((err) => {
            if (err.code !== "P2025") throw err;
        });
    }
}