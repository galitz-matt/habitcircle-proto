import { UserRepository } from "@/server/domain/repositories/user.repository";
import { User } from "@/server/domain/entities/user.entity";
import { RegisterUserCommand, RegisterUserResult } from "../dto/user/register-user.dto";
import { DeleteUserCommand, DeleteUserResult } from "../dto/user/delete-user.dto";
import { Result } from "@/lib/types";
import { UNEXPECTED_ERROR } from "@/lib/constants";

export class UserService {
    constructor(
        private readonly userRepo: UserRepository
    ) {}

    async register(cmd: RegisterUserCommand): Promise<Result<RegisterUserResult>> {
        try {
            const user = await User.create(cmd.username, cmd.password);
            this.userRepo.save(user)
            return { ok: true, value: { userId: user.id, username: user.getUsername() }}
        } catch (err) {
            const message = err instanceof Error ? err.message : UNEXPECTED_ERROR;
            return { ok: false, error: message}
        }
    }

    async delete(cmd: DeleteUserCommand): Promise<Result<DeleteUserResult>> {
        if (cmd.requestingUserId !== cmd.targetUserId) {
            return { ok: false, error: "Cannot delete another user" };
        }
        
        try {
            await this.userRepo.delete(cmd.targetUserId);
            return { ok: true, value: { result: true }}
        } catch (err) {
            const message = err instanceof Error ? err.message : UNEXPECTED_ERROR;
            return { ok: false, error: message}
        }
    }
}