export type RemoveHabitsFromCircleCommand = {
    circleId: string;
    habitIdsToRemove: string[];
}

export type RemoveHabitsFromCircleResult = {
    success: boolean;
}

