import { UserRepository } from "@/server/domain/repositories/user.repository";
import { User } from "@/server/domain/entities/user.entity";
import { RegisterUserCommand, RegisterUserResult } from "../use-cases/register-user.use-case";
import { DeleteUserCommand, DeleteUserResult } from "../use-cases/delete-user.use-case";
import { Result } from "@/lib/types";
import { serviceFailure } from "@/lib/utils";

export class UserService {
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

    async deleteUser(actorId: string, cmd: DeleteUserCommand): Promise<Result<DeleteUserResult>> {
        if (actorId !== cmd.userIdToRemove)
            return serviceFailure("Cannot delete another user");
        
        try {
            await this.userRepo.delete(cmd.userIdToRemove);
            return { ok: true, value: { result: true }}
        } catch (err) {
            return serviceFailure(err);
        }
    }
}