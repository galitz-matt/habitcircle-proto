import { IdGenerator } from "@/lib/utils";
import { PostCaption } from "../value-objects/post-caption.value-object";

export class Post {
    private constructor(
        private readonly _id: string,
        private readonly _createdAt: Date,
        private readonly _userId: string,
        private readonly _habitId: string,
        private readonly _completionId: string,
        private _photoKey?: string,
        private _caption?: PostCaption
    ) {}

    static create(
        userId: string,
        habitId: string,
        completionId: string,
        photoKey?: string,
        caption?: PostCaption
    ): Post {
        return new Post(
            IdGenerator.new(),
            new Date(),
            userId,
            habitId,
            completionId,
            photoKey,
            caption
        )
    }

    static rehydrate(
        id: string,
        createdAt: Date,
        userId: string,
        habitId: string,
        completionId: string,
        photoKey?: string,
        caption?: PostCaption
    ): Post {
        return new Post(
            id,
            createdAt,
            userId,
            habitId,
            completionId,
            photoKey,
            caption
        );
    }
}