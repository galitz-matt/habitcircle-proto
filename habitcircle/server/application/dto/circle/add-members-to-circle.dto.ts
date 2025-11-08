export type AddMembersToCircleCommand = {
    requestingUserId: string;
    circleId: string;
    toBeAddedUserIds: string[];
}

export type AddMembersToCircleResult = {
    memberIds: string[]
}