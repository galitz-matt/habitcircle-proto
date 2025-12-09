export type PostPrismaDto = {
    id: string;
    createdAt: Date;
    userId: string;
    habitId: string;
    completionId: string;
    photoKey: string | undefined;
    caption: string | undefined; 
} 