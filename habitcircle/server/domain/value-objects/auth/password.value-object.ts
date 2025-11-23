import { HashInvariants } from "../../invariants/hash.invariant";

export class Password {

    private constructor(
        private readonly _hash: string, 
    ) {
        Object.freeze(this);
    }

    static fromHash(hash: string): Password {
        HashInvariants.enforce(hash);
        return new Password(hash);
    }

    toString(): string {
        return this._hash;
    }

    equals(other: Password): boolean {
        return !!other && this._hash === other.toString();
    }

    change(hash: string): Password {
        return Password.fromHash(hash);
    }

    static rehydrate(hash: string): Password {
        return new Password(hash);
    }
}
