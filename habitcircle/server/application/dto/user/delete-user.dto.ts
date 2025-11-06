export type DeleteUserCommand = {
    requestingUserId: string;
    targetUserId: string;
}

export type DeleteUserResult = {
    result: boolean;
}