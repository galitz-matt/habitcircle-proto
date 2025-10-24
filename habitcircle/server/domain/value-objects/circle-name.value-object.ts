import { StringUtils } from "@lib/utils";
import { CircleNameInvariants } from "../invariants/circle-name.invariant";

export class CircleName {
    private constructor(
        readonly value: string
    ) {}

    static create(value: string) {
        const normalized = StringUtils.normalize(value);
        if (!CircleNameInvariants.isValidLength(normalized)) throw new Error("Circle name must be between 1 and 50 characters");

        return new CircleName(normalized);
    }
}