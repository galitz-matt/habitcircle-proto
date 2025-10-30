import { PrismaClient } from "@/generated/prisma";
import { Completion } from "@/server/domain/entities/completion.entity";
import { CompletionRepository } from "@/server/domain/repositories/completion.repository";
import { CompletionMapper } from "@/server/db/mappers/completion.mapper";

export class CompletionPrismaRepository implements CompletionRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async findByUserAndHabit(userId: string, habitId: string): Promise<Completion | null> {
        const completionRecord = await this.prisma.completion.findUnique({
            where: { userId_habitId: { userId: userId, habitId: habitId} }
        });

        return completionRecord ? CompletionMapper.toDomain(completionRecord) : null;
    }

    async findByUserId(userId: string): Promise<Completion[]> {
        const completionRecords = await this.prisma.completion.findMany({
            where: { userId: userId }
        });

        return completionRecords.map(CompletionMapper.toDomain);
    }

    async findByHabitId(habitId: string): Promise<Completion[]> {
        const completionRecords = await this.prisma.completion.findMany({
            where: { habitId: habitId }
        });

        return completionRecords.map(CompletionMapper.toDomain)
    }

    async findAll(): Promise<Completion[]> {
        const completionRecords = await this.prisma.completion.findMany();
        return completionRecords.map(CompletionMapper.toDomain)
    }

    async save(completion: Completion): Promise<void> {
        const completionRecord = CompletionMapper.toPrisma(completion);

        await this.prisma.completion.upsert({
            where: { id: completionRecord.id },
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
            if (err.code !== "P2025") throw err;
        });
    }
}