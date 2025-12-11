import { HabitPrismaDto } from "./habit-prisma.dto";

export type CirclePrismaDto = {
    scalars: {
        id: string;
        name: string;
        photoKey?: string;
    }
    ownerId: string;
    memberIds: string[];
    habits: HabitPrismaDto[];
}