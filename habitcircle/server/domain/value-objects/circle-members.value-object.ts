import { User } from "../entities/user.entity";
import { CircleMembersInvariants } from "../invariants/circle-members.invariant";
import { ValueObject } from "./value-object.base";

export class CircleMembers extends ValueObject<CircleMembers> {
    private constructor(
        readonly owner: User,
        readonly members: User[]
    ) { super() }

    static create(owner: User, members: User[]): CircleMembers {
        CircleMembersInvariants.enforce(owner, members);
        return new CircleMembers(owner, members);
    }

    getAll(): User[] {
        return this.members;
    }

    add(user: User): CircleMembers {
        const updatedMembers = [...this.members, user];
        CircleMembersInvariants.enforce(this.owner, updatedMembers);
        return new CircleMembers(this.owner, updatedMembers);
    }

    remove(user: User): CircleMembers {
        const toRemoveId = user.id;
        const updatedMembers = this.members.filter(u => u.id == toRemoveId);
        CircleMembersInvariants.enforce(this.owner, updatedMembers);
        return new CircleMembers(this.owner, updatedMembers);
    }

    toString(): string {
        let s = "{ "
        for (let i = 0; i < this.members.length; i++) {
            const member = this.members[i];
            s += `${member.getUsername}`;
            if (i < this.members.length - 1) {
                s += ", ";
            }
        }
        s += " }"
        return s
    }

    equals(other: CircleMembers): boolean {
        if (other.members === this.members) return true;
        if (other.members.length != this.members.length) return false;

        const thisIds = new Set(this.members.map(u => u.id));
        const otherIds = new Set(other.members.map(u => u.id));

        if (thisIds.size !== otherIds.size) return false;

        for (const id of thisIds) {
            if (!otherIds.has(id)) return false;
        }

        return true;
    }

    static rehydrate(owner: User, members: User[]): CircleMembers {
        return new CircleMembers(owner, members);
    }
}