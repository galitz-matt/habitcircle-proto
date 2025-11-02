export type RegisterUserRequest = {
    username: string;
    password: string;
}

export type RegisterUserResponse = {
    id: string;
    username: string;
}