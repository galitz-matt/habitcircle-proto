import type { PrismaClient } from "@/prisma/generated";
import { DuplicateError, NotFoundError } from "@/lib/errors";
import type { Completion } from "@/server/domain/entities/completion.entity";
import { CompletionRepository } from "@/server/application/repositories/completion.repository";
import { CompletionPrismaMapper } from "@/server/infra/db/prisma/mappers/completion.prisma-mapper";

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

        return completionRecord ? CompletionPrismaMapper.toDomain(completionRecord): null;
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

    async create(completion: Completion): Promise<void> {
        const completionDto = CompletionPrismaMapper.toPersistence(completion);

        await this.prisma.completion.create({
            data: completionDto,
        }).catch((err) => {
            if (err.code === "P2002") {
                const target = err.meta?.target?.[0];
                throw new DuplicateError(`Completion already exists with duplicate ${target}`);
            }
            throw err;
        });
    }

    async update(completion: Completion): Promise<void> {
        const completionDto = CompletionPrismaMapper.toPersistence(completion);
        const { id, ...mutableFields } = completionDto

        await this.prisma.completion.update({
            where: { id },
            data: mutableFields,
        }).catch((err) => {
            if (err.code === "P2025") 
                throw new NotFoundError(`Completion with id ${id} not found`);
            throw err;
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.completion.delete({
            where: { id }
        }).catch((err) => {
            if (err.code === "P2025") 
                throw new NotFoundError(`Completion with id ${id} not found`);
            throw err;
        });
    }
}