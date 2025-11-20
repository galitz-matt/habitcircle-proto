import { IdGenerator } from "@/lib/utils";
import { PostCaption } from "../value-objects/post-caption.value-object";

export type PostProps = {
    id: string,
    createdAt: Date,
    userId: string,
    habitId: string,
    completionId: string,
    photoKey?: string,
    caption?: PostCaption
}

export type CreatePostInput = {
    userId: string,
    habitId: string,
    completionId: string,
    photoKey?: string,
    caption?: PostCaption
}

export class Post {
    private constructor(readonly props: PostProps) {}

    static create(input: CreatePostInput): Post {
        const props: PostProps = {
            id: IdGenerator.new(),
            createdAt: new Date(),
            ...input
        };

        return new Post(props)
    }

    static rehydrate(props: PostProps): Post {
        return new Post(props);
    }

    get id(): string {
        return this.props.id;
    }

    get createdAt(): Date {
        return this.props.createdAt;
    }

    get userId(): string {
        return this.props.userId;
    }

    get habitId(): string {
        return this.props.habitId;
    }

    get completionId(): string {
        return this.props.completionId;
    }
    
    get photoKey(): string | undefined {
        return this.props.photoKey;
    }

    get caption(): PostCaption | undefined {
        return this.props.caption;
    }

    protected create(props: PostProps): this {
        return new Post(props) as this;
    }
}