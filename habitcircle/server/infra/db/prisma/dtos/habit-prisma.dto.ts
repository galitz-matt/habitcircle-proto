export type HabitMutablePropsPrismaDto = {
    name: string;
}

export type HabitPrismaDto = {
    id: string,
    createdAt: Date,
} & HabitMutablePropsPrismaDto