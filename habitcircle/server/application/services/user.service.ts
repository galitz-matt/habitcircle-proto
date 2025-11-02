import { UserRepository } from "@/server/domain/repositories/user.repository";
import { RegisterUserRequest, RegisterUserResponse } from "../dto/user/register-user.dto";
import { User } from "@/server/domain/entities/user.entity";

export class UserService {
    constructor(
        private readonly userRepo: UserRepository
    ) {}

    async register(request: RegisterUserRequest): Promise<RegisterUserResponse> {
        const user = await User.create(request.username, request.password);
        this.userRepo.save(user);
        return { id: user.id, username: user.getUsername() }
    }

    
}