export type PostMutablePropsPrismaDto = {
    photoKey: string | undefined;
    caption: string | undefined; 
}

export type PostPrismaDto = {
    id: string;
    createdAt: Date;
    userId: string;
    habitId: string;
    completionId: string;
} & PostMutablePropsPrismaDto