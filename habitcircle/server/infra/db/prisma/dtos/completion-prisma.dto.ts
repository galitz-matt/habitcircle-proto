import type { PostPrismaDto } from "./post-prisma.dto"

export type CompletionPrismaDto = {
    scalars: {
        id: string;
        completedAt: Date;
        userId: string;
        habitId: string;
    };
    post?: PostPrismaDto;
}