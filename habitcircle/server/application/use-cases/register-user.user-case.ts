export type RegisterUserCommand = {
    username: string;
    password: string;
}

export type RegisterUserResult = {
    userId: string;
    username: string;
}