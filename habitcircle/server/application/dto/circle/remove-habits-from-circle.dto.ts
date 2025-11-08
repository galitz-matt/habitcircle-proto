export type RemoveHabitsFromCircleCommand = {
    requestingUserId: string;
    circleId: string;
    habitIds: string[];
}

export type RemoveHabitsFromCircleResult = {
    success: boolean;
}

