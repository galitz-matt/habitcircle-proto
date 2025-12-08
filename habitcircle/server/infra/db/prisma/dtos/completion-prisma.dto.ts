import type { PostMutablePropsPrismaDto, PostPrismaDto } from "./post-prisma.dto"

export type CompletionBasePrismaDto = {
    id: string,
    completedAt: Date,
    userId: string,
    habitId: string
}

export type CompletionCreatePrismaDto = CompletionBasePrismaDto & {
    postToCreate: PostPrismaDto | undefined;
}

export type CompletionUpdatePrismaDto = CompletionBasePrismaDto & {
    postToUpsert: {
        where: { id: string };
        create: PostPrismaDto;
        update: PostMutablePropsPrismaDto;
    } | undefined
}