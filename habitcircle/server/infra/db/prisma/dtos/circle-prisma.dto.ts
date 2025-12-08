import { HabitMutablePropsPrismaDto, HabitPrismaDto } from "./habit-prisma.dto";

type CircleBasePrismaDto = {
    scalars: {
        id: string;
        name: string;
        photoKey: string | null;
    };
    ownerId: string;
    memberIds: { id: string }[];
}

export type CircleCreatePrismaDto = CircleBasePrismaDto & {
    habitsToCreate: HabitPrismaDto[];
};

export type CircleUpdatePrismaDto = CircleBasePrismaDto & {
    habitsToUpsert: {
        where: { id: string };
        create: HabitPrismaDto;
        update: HabitMutablePropsPrismaDto;
    }[];
    habitIdsToDelete: { id: { in: string[] } }
};