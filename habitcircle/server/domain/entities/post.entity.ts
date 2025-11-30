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

    get id(): string {
        return this._id;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    get userId(): string {
        return this._userId;
    }

    get habitId(): string {
        return this._habitId;
    }

    get completionId(): string {
        return this._completionId;
    }

    get photoKey(): string | undefined {
        return this._photoKey;
    }

    get caption(): PostCaption | undefined {
        return this._caption;
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
            new Date(createdAt.getTime()),
            userId,
            habitId,
            completionId,
            photoKey,
            caption
        );
    }
}