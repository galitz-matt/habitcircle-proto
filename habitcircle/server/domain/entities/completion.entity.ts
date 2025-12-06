import { IdGenerator } from "@/lib/utils";
import { Post } from "./post.entity";
import { DomainError } from "@/lib/errors";

export type CreateCompletionInput = {
    userId: string,
    habitId: string,
}

export class Completion {
    private constructor(
        private readonly _id: string,
        private readonly _completedAt: Date,
        private readonly _userId: string,
        private readonly _habitId: string,
        private _post?: Post
    ) {}

    static create(userId: string, habitId: string): Completion {
        const completedAt = new Date();
        completedAt.setHours(0, 0, 0, 0);

        return new Completion(
            IdGenerator.new(),
            completedAt,
            userId,
            habitId
        )
    }

    attachPost(post: Post): this {
        if (this._post)
            throw new DomainError("Completion already has an associated post");
        if (post.completionId !== this.id)
            throw new DomainError("Post completionId does not match this completion")

        this._post = post;
        return this;
    }

    get id() {
        return this._id;
    }

    get completedAt() {
        return new Date(this._completedAt);
    }

    get userId() {
        return this._userId;
    }

    get habitId() {
        return this._habitId;
    }

    get post() {
        return this._post;
    }

    static rehydrate(
        id: string,
        completedAt: Date,
        userId: string,
        habitId: string
    ): Completion {
        /* Used exclusively by repositories to reconstitue from persistence */
        return new Completion(
            id,
            completedAt,
            userId,
            habitId
        );
    }
}