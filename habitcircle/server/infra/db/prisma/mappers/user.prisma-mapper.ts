import { User } from "@/server/domain/entities/user.entity";
import type { User as UserRecord } from "@/prisma/generated"
import { UserPersistenceDto } from "../dtos/user-persistence.dto";
import { Username } from "@/server/domain/value-objects/username.value-object";
import { Biography } from "@/server/domain/value-objects/biography.value-object";


export class UserPrismaMapper {
    static toDomain(record: UserRecord): User {
        return User.rehydrate(
            record.id,
            Username.rehydrate(record.username),
            record.emailAddress ?? undefined,
            record.biography ? Biography.rehydrate(record.biography) : undefined,
            record.profilePictureKey ?? undefined
        );
    }

    static toPersistence(user: User): UserPersistenceDto {
        return {
            id: user.id,
            username: user.username.toString(),
            emailAddress: user.emailAddress ?? null,
            biography: user.biography?.toString() ?? null,
            profilePictureKey: user.profilePictureKey ?? null
        };
    }
}