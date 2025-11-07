import { UserRepository } from "@/server/domain/repositories/user.repository";
import { User } from "@/server/domain/entities/user.entity";
import { RegisterUserCommand, RegisterUserResult } from "../dto/user/register-user.dto";
import { DeleteUserCommand, DeleteUserResult } from "../dto/user/delete-user.dto";
import { Result } from "@/lib/types";
import { badResult } from "@/lib/utils";

export class UserService {
    constructor(
        private readonly userRepo: UserRepository
    ) {}

    async register(cmd: RegisterUserCommand): Promise<Result<RegisterUserResult>> {
        try {
            const user = await User.create(cmd.username, cmd.password);
            await this.userRepo.save(user)
            return { ok: true, value: { userId: user.id, username: user.getUsername() }}
        } catch (err) {
            return badResult(err);
        }
    }

    async delete(cmd: DeleteUserCommand): Promise<Result<DeleteUserResult>> {
        if (cmd.requestingUserId !== cmd.targetUserId)
            return badResult("Cannot delete another user");
        
        try {
            await this.userRepo.delete(cmd.targetUserId);
            return { ok: true, value: { result: true }}
        } catch (err) {
            return badResult(err);
        }
    }
}