export type RegisterCircleCommand = {
    circleName: string;
    ownerId: string
    memberIds: string[];
    habitTemplates: {
        name: string
    }[]
}

export type RegisterCircleResult = {
    circleId: string;
    name: string;
}
