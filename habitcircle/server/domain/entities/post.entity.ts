import { IdGenerator } from "@/lib/utils";
import { PostCaption } from "../value-objects/post-caption.value-object";

export class Post {
    private constructor(
        readonly id: string,
        readonly createdAt: Date,
        readonly userId: string,
        readonly habitId: string,
        readonly completionId: string,
        readonly photoKey?: string,
        readonly caption?: PostCaption 
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

    setCaption(caption: PostCaption): Post {
        return this.clone({ caption: caption });
    }

    setPhotoKey(photoKey: string): Post {
        return this.clone({ photoKey: photoKey });
    }

    static rehydrate(
        id: string,
        createdAt: Date,
        userId: string,
        habitId: string,
        completionId: string,
        photoKey?: string,
        caption?: string
    ): Post {
        return new Post(
            id,
            createdAt,
            userId,
            habitId,
            completionId,
            photoKey,
            caption ? PostCaption.rehydrate(caption) : undefined
        )
    }
    
    private clone(changes: Partial<Post>): Post {
        return new Post(
            changes.id ?? this.id,
            changes.createdAt ?? this.createdAt,
            changes.userId ?? this.userId,
            changes.habitId ?? this.habitId,
            changes.completionId ?? this.completionId,
            changes.photoKey ?? this.photoKey,
            changes.caption ?? this.caption
        );
    }
}