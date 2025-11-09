import { User } from "@/server/domain/entities/user.entity";
import { UserRepository } from "@/server/domain/repositories/user.repository";
import type { RegisterUserCommand, RegisterUserResult } from "../use-cases/register-user.use-case";
import type { Result } from "@/lib/types";
import { serviceFailure } from "@/lib/utils";

export class AuthenticationService {
    constructor(
        private readonly userRepo: UserRepository
    ) {}

    async registerUser(cmd: RegisterUserCommand): Promise<Result<RegisterUserResult>> {
        try {
            const user = await User.create(cmd.username, cmd.password);
            await this.userRepo.save(user)
            return { ok: true, value: { userId: user.id, username: user.getUsername() }}
        } catch (err) {
            return serviceFailure(err);
        }
    }
}