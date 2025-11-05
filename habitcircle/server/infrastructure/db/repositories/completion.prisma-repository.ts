import type { PrismaClient } from "@/generated/prisma";
import type { Completion } from "@/server/domain/entities/completion.entity";
import { CompletionRepository } from "@/server/domain/repositories/completion.repository";
import { CompletionPrismaMapper } from "@/server/infrastructure/db/mappers/completion.prisma-mapper";

export class CompletionPrismaRepository implements CompletionRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async findByUserHabitAndDate(userId: string, habitId: string, completedAt: Date): Promise<Completion | null> {
        const completionRecord = await this.prisma.completion.findUnique({
            where: {
                userId_habitId_completedAt: {
                    userId: userId,
                    habitId: habitId,
                    completedAt: completedAt,
                },
            },
        });

        return completionRecord ? CompletionPrismaMapper.toDomain(completionRecord) : null;
    }

    async findByUserAndHabit(userId: string, habitId: string): Promise<Completion[]> {
        const completionRecords = await this.prisma.completion.findMany({
            where: { 
                userId: userId, 
                habitId: habitId
            }
        });

        return completionRecords.map(CompletionPrismaMapper.toDomain);
    }

    async findByUserId(userId: string): Promise<Completion[]> {
        const completionRecords = await this.prisma.completion.findMany({
            where: { userId: userId }
        });

        return completionRecords.map(CompletionPrismaMapper.toDomain);
    }

    async findByHabitId(habitId: string): Promise<Completion[]> {
        const completionRecords = await this.prisma.completion.findMany({
            where: { habitId: habitId }
        });

        return completionRecords.map(CompletionPrismaMapper.toDomain)
    }

    async findAll(): Promise<Completion[]> {
        const completionRecords = await this.prisma.completion.findMany();
        return completionRecords.map(CompletionPrismaMapper.toDomain)
    }

    async save(completion: Completion): Promise<void> {
        const completionRecord = CompletionPrismaMapper.toPersistence(completion);

        await this.prisma.completion.upsert({
            where: { 
                userId_habitId_completedAt: {
                    userId: completionRecord.userId,
                    habitId: completionRecord.habitId,
                    completedAt: completionRecord.completedAt
                } 
            },
            create: completionRecord,
            update: {
                createdAt: completionRecord.createdAt
            }
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.completion.delete({
            where: { id: id }
        }).catch((err) => {
            if (err.code !== "P2025") throw new Error(`Completion with id ${id} not found`);
        });
    }
}