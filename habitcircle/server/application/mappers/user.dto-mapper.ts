import { User } from "@/server/domain/entities/user.entity";
import { UserDto } from "../dtos/user.dto";

export class UserDtoMapper {
    static toDto(user: User): UserDto {
        return {
            id: user.id,
            createdAt: user.createdAt.toISOString(),
            username: user.getUsername()
        }
    }
}