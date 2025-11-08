export type RemoveHabitsFromCircleCommand = {
    requestingUserId: string;
    circleId: string;
    habitIdsToRemove: string[];
}

export type RemoveHabitsFromCircleResult = {
    success: boolean;
}

