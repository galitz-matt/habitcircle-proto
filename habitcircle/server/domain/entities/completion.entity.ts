import { IdGenerator } from "@/lib/utils";
import { Entity } from "./entity.abc";

export type CompletionProps = {
    id: string,
    createdAt: Date,
    completedAt: Date,
    userId: string,
    habitId: string
}

export type CreateCompletionInput = {
    userId: string,
    habitId: string,
}

export class Completion extends Entity<CompletionProps> {
    private constructor(props: CompletionProps) { super(props) }

    static create(input: CreateCompletionInput): Completion {
        const completedAt = new Date();
        completedAt.setHours(0, 0, 0, 0);

        const props: CompletionProps = {
            id: IdGenerator.new(),
            createdAt: new Date(),
            completedAt: completedAt,
            userId: input.userId,
            habitId: input.habitId
        }

        return new Completion(props);
    }

    static rehydrate(props: CompletionProps): Completion {
        /* Used exclusively by repositories to reconstitue from persistence */
        return new Completion(props);
    }

    get id() {
        return this.props.id;
    }

    get createdAt() {
        return this.props.createdAt;
    }

    get completedAt() {
        return this.props.completedAt;
    }

    get userId() {
        return this.props.userId;
    }

    get habitId() {
        return this.props.habitId;
    }

    protected create(props: CompletionProps): this {
        return new Completion(props) as this
    }
}