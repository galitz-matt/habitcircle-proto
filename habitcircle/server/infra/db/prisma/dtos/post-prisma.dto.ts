export type PostPrismaDto = {
    scalars: {
        id: string;
        photoKey: string | undefined;
        caption: string | undefined; 
    }
    userId: string;
    habitId: string;
    completionId: string;
} 