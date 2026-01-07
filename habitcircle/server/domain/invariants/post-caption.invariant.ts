import { CAPTION_PATTERN } from "@/server/lib/constants";
import { DomainError } from "@/server/lib/errors";

export class PostCaptionInvariants {
    static enforce(value: string) {
        this.ensureValidCharacters(value);
        this.ensureValidLength(value);
    }

    static ensureValidCharacters(value: string) {
        if (!CAPTION_PATTERN.test(value))
            throw new DomainError("Caption contains invalid characters");
    }

    static ensureValidLength(value: string) {
        if (value.length > 500)
            throw new DomainError("Caption must be at most 500 characters");
    }
}