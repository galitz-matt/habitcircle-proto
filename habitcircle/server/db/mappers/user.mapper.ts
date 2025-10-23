import { User } from "@server/domain/entities/user.entity";
import type { User as UserRecord } from "@generated/prisma";


export class UserMapper {
    static toDomain(record: UserRecord): User {
        return User.rehydrate(
            record.id,
            record.createdAt,
            record.username,
            record.password
        );
    }

    static toPrisma(user: User): UserRecord {
        return {
            id: user.id,
            createdAt: user.createdAt,
            username: user.getUsername(),
            password: user.getPasswordHash()
        };
    }
}