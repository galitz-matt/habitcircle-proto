export type DeleteCircleCommand = {
    requestingUserId: string;
    circleId: string;
}

export type DeleteCircleResult = {
    result: boolean;
}