import { User } from "@server/domain/user/user.entity";
import type { User as UserRecord } from "@generated/prisma";


export class UserMapper {
    static toDomain(record: UserRecord): User {
        return User.rehydrate(
            record.id,
            record.createdAt,
            record.name,
            record.password
        );
    }

    static toPrisma(user: User): UserRecord {
        return {
            id: user.id,
            createdAt: user.createdAt,
            name: user.name,
            password: user.getPasswordHash()
        };
    }
}