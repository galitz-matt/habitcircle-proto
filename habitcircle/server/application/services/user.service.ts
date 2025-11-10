import { UserRepository } from "@/server/domain/repositories/user.repository";
import { DeleteUserCommand, DeleteUserResult } from "../use-cases/user/delete-user.use-case";
import { Result } from "@/lib/types";
import { failure, success } from "@/lib/utils";

export class UserService {
    constructor(
        private readonly userRepo: UserRepository
    ) {}

    async deleteUser(actorId: string, cmd: DeleteUserCommand): Promise<Result<DeleteUserResult>> {
        if (actorId !== cmd.toDeleteUserId)
            return failure("Cannot delete another user");
        
        try {
            await this.userRepo.delete(cmd.toDeleteUserId);
            return success({ deletedUserId: cmd.toDeleteUserId })
        } catch (err) {
            return failure(err);
        }
    }
}