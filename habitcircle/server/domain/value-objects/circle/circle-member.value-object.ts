import { Username } from "../user/username.value-object";
import { User } from "@/server/domain/entities/user.entity";

export class CircleMember {
    private constructor(
        readonly userId: string,
        readonly username: Username,
        readonly profilePictureKey?: string,
    ) {
        Object.freeze(this);
    }

    static create(
        userId: string,
        username: Username,
        profilePictureKey?: string
    ) {
        return new CircleMember(userId, username, profilePictureKey);
    }

    static fromUser(user: User) {
        return CircleMember.create(
            user.id,
            user.username,
            user.profilePictureKey
        );
    }

    static rehydrate(
        userId: string,
        username: Username,
        profilePictureKey?: string,
    ): CircleMember {
        return new CircleMember(
            userId,
            username,
            profilePictureKey
        )
    }
}