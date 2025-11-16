import { StringUtils } from "@/lib/utils";
import { PostCaptionInvariants } from "../invariants/post-caption.invariant";

export class PostCaption {
    private constructor(
        readonly caption: string
    ) {}

    static create(caption: string): PostCaption {
        const normalized = StringUtils.normalize(caption);
        PostCaptionInvariants.enforce(normalized);
        return new PostCaption(caption);
    }

    static rehydrate(caption: string): PostCaption {
        return new PostCaption(caption);
    }

    toString(): string {
        return this.caption;
    }
}
