import { UserRepository } from "@/server/domain/repositories/user.repository";
import { DeleteUserCommand, DeleteUserResult } from "../use-cases/delete-user.use-case";
import { Result } from "@/lib/types";
import { serviceFailure } from "@/lib/utils";

export class UserService {
    constructor(
        private readonly userRepo: UserRepository
    ) {}

    async deleteUser(actorId: string, cmd: DeleteUserCommand): Promise<Result<DeleteUserResult>> {
        if (actorId !== cmd.userIdToRemove)
            return serviceFailure("Cannot delete another user");
        
        try {
            await this.userRepo.delete(cmd.userIdToRemove);
            return { ok: true, value: { deletedUserId: cmd.userIdToRemove }}
        } catch (err) {
            return serviceFailure(err);
        }
    }
}