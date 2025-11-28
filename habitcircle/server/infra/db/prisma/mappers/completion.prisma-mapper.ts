import { Completion } from "@/server/domain/entities/completion.entity";
import { Completion as CompletionRecord } from "@/prisma/generated";
import { CompletionPrismaDto } from "../dtos/completion-prisma.dto";

export class CompletionPrismaMapper {
    static toDomain(record: CompletionRecord): Completion {
        return Completion.rehydrate(
            record.id,
            record.completedAt,
            record.userId,
            record.habitId
        );
    }

    static toPersistence(completion: Completion): CompletionPrismaDto {
        return {
            id: completion.id,
            completedAt: completion.completedAt,
            userId: completion.userId,
            habitId: completion.habitId
        }
    }
}