import { Completion } from "@/server/domain/entities/completion.entity";
import { Completion as CompletionRecord } from "@/generated/prisma";

export class CompletionPrismaMapper {
    static toDomain(record: CompletionRecord) {
        return Completion.rehydrate(
            record.id,
            record.createdAt,
            record.userId,
            record.habitId
        );
    }

    static toPersistence(completion: Completion) {
        return {
            id: completion.id,
            createdAt: completion.createdAt,
            userId: completion.userId,
            habitId: completion.habitId
        }
    }
}