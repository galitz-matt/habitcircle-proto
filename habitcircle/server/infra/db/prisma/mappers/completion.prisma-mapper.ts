import { Completion } from "@/server/domain/entities/completion.entity";
import type { Prisma } from "@/prisma/generated";
import type { CompletionPrismaDto } from "../dtos/completion-prisma.dto";
import { PostPrismaMapper } from "./post.prisma-mapper";

type CompletionRecordWithRelations = Prisma.CompletionGetPayload<{
    include: { post: true }
}>

export class CompletionPrismaMapper {
    static toDomain(record: CompletionRecordWithRelations): Completion {
        return Completion.rehydrate(
            record.id,
            record.completedAt,
            record.userId,
            record.habitId,
            record.post 
                ? PostPrismaMapper.toDomain(record.post) 
                : undefined
        );
    }

    static toPersistence(completion: Completion): CompletionPrismaDto {
        return {
            scalars: {
                id: completion.id,
                completedAt: completion.completedAt,
            },
            userId: completion.userId,
            habitId: completion.habitId,
            post: completion.post 
                ? PostPrismaMapper.toPersistence(completion.post) 
                : undefined
        };
    }
}