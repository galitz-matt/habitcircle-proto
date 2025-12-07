export type CirclePrismaDto = {
    scalars: {
        id: string;
        name: string;
        photoKey: string | null
    };

    ownerId: string;

    memberIds: string[];

    habits: {
        upsert: {
            id: string;
            name: string;
        }[];
        deleteIds: string[]
    }
};