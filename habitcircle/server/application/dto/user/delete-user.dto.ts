export type DeleteUserRequest = {
    requestingId: string;
    targetUserId: string;
}

export type DeleteUserResponse = {
    result: boolean;
    message?: string;
}