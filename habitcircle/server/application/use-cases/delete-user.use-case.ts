export type DeleteUserCommand = {
    requestingUserId: string;
    userIdToRemove: string;
}

export type DeleteUserResult = {
    result: boolean;
}