export type AddMembersToCircleCommand = {
    circleId: string;
    toBeAddedUserIds: string[];
}

export type AddMembersToCircleResult = {
    memberIds: string[]
}