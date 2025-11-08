export type DeleteCircleCommand = {
    requestingUserId: string;
    circleId: string;
}

export type DeleteCircleResult = {
    success: boolean;
}