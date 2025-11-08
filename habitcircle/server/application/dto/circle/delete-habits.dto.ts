export type DeleteHabitsCommand = {
    requestingUserId: string;
    circleId: string;
    habitIds: string[];
}

export type DeleteHabitsResult = {
    success: boolean;
}

