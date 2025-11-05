import { UserRepository } from "@/server/domain/repositories/user.repository";
import { User } from "@/server/domain/entities/user.entity";
import { RegisterUserRequest, RegisterUserResponse } from "../dto/user/register-user.dto";
import { DeleteUserRequest, DeleteUserResponse } from "../dto/user/delete-user.dto";
import { PermissionError } from "@/lib/errors";

export class UserService {
    constructor(
        private readonly userRepo: UserRepository
    ) {}

    async register(request: RegisterUserRequest): Promise<RegisterUserResponse> {
        const user = await User.create(request.username, request.password);
        this.userRepo.save(user)
        return { id: user.id, username: user.getUsername() }
    }

    async delete(request: DeleteUserRequest): Promise<DeleteUserResponse> {
        if (request.requestingId !== request.targetUserId) {
            throw new PermissionError("Cannot delete another user");
        }
        try {
            await this.userRepo.delete(request.targetUserId);
            return { result: true };
        } catch (err) {
            if (err instanceof Error) {
                return { result: false, message: err.message };
            }
            return { result: false, message: "Unexpected Error"};
        }
    }
}