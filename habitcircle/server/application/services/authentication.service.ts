import { User } from "@/server/domain/entities/user.entity";
import { UserRepository } from "@/server/domain/repositories/user.repository";
import type { RegisterUserCommand, RegisterUserResult } from "@/server/application/use-cases/auth/register-user.use-case";
import type { Result } from "@/lib/types";
import { failure, success } from "@/lib/utils";
import { UserDtoMapper } from "../mappers/user.dto-mapper";

export class AuthenticationService {
    constructor(
        private readonly userRepo: UserRepository
    ) {}

    async registerUser(cmd: RegisterUserCommand): Promise<Result<RegisterUserResult>> {
        try {
            const user = await User.create(cmd.username, cmd.password);
            await this.userRepo.save(user)
            const userDto = UserDtoMapper.toDto(user);            
            return success({ user: userDto })
        } catch (err) {
            return failure(err);
        }
    }
}