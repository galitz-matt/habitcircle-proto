import { StringUtils } from "@lib/utils";

export class CircleName {
    private constructor(
        readonly value: string
    ) {}

    static create(value: string) {
        const normalized = StringUtils.normalize(value);

        
    }
}