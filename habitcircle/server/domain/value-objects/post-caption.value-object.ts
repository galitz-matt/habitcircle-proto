import { PostCaptionInvariants } from "../invariants/post-caption.invariant";

export class PostCaption {
    private constructor(
        readonly caption: string
    ) {
        Object.freeze(this);
    }

    static create(caption: string): PostCaption {
        PostCaptionInvariants.enforce(caption);
        return new PostCaption(caption);
    }

    static rehydrate(caption: string): PostCaption {
        return PostCaption.create(caption);
    }

    toString(): string {
        return this.caption;
    }
}
