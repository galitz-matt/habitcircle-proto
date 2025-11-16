import { BCRYPT_HASH_PATTERN } from "@/lib/constants";
import { DomainError } from "@/lib/errors";

export class HashInvariants {
    static enforce(value: string): void {
        this.ensureValidBcryptHash(value);
    }

    static ensureValidBcryptHash(value: string): void {
        if (!BCRYPT_HASH_PATTERN.test(value)) {
            throw new DomainError("Not a valid hash");
        }
    }
}