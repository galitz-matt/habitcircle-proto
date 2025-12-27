import { Biography } from "./biography.value-object";
import { Username } from "./username.value-object";

export type CreateUserProfileProps = {
    username: string;
    biography?: string;
    profilePictureKey?: string;
}

export class UserProfile {
    private constructor(
        readonly username: Username,
        readonly biography?: Biography,
        readonly profilePictureKey?: string,
    ) {
        Object.freeze(this);
    }

    static create(props: CreateUserProfileProps) {
        return new UserProfile(
            Username.create(props.username),
            props.biography 
                ? Biography.create(props.biography)
                : undefined,
            props.profilePictureKey,
        )
    }

    static rehydrate(
        username: Username,
        biography: Biography,
        profilePictureKey: string
    ) {
        return new UserProfile(
            username,
            biography,
            profilePictureKey
        )
    }
}