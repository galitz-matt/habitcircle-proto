import type { UserDto } from "../dtos/user.dto";

export type RegisterUserCommand = {
    username: string;
    password: string;
}

export type RegisterUserResult = {
    user: UserDto
}