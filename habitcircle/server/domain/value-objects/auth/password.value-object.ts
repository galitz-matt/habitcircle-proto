import { HashInvariants } from "../../invariants/hash.invariant";

export class Password {

    private constructor(
        private readonly hash: string, 
    ) {}

    static fromHash(hash: string): Password {
        HashInvariants.enforce(hash);
        return new Password(hash);
    }

    toString(): string {
        return this.hash;
    }

    equals(other: Password): boolean {
        return !!other && this.hash === other.toString();
    }

    matches(otherHash: string): boolean {
        return otherHash === this.hash;
    }

    static rehydrate(hash: string): Password {
        return new Password(hash);
    }
}
