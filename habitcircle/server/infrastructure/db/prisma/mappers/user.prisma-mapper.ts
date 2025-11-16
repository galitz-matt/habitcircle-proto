import { User } from "@/server/domain/entities/user.entity";
import type { User as UserRecord } from "@/prisma/generated"
import { UserPrimitive } from "../../dtos/user-primitive.dto";


export class UserPrismaMapper {
    static toDomain(record: UserRecord): User {
        return User.rehydrate(
            record.id,
            record.createdAt,
            record.username,
            record.emailAddress ?? undefined,
            record.biography ?? undefined,
            record.profilePictureKey ?? undefined
        );
    }

    static toPersistence(user: User): UserPrimitive {
        return {
            id: user.id,
            createdAt: user.createdAt,
            username: user.getUsername(),
            emailAddress: user.getEmailAddress() ?? null,
            biography: user.getBiography() ?? null,
            profilePictureKey: user.getProfilePictureKey() ?? null
        };
    }
}