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

    addMany(users: User[]): CircleMembers {
        const updatedMembers = [...this.members, ...users];
        CircleMembersInvariants.enforce(this.owner, updatedMembers);
        return new CircleMembers(this.owner, updatedMembers)
    }

    contains(user: User): boolean {
        return this.members.some(m => m.equals(user));
    }

    containsById(userId: string): boolean {
        return this.members.some(m => m.id === userId);
    }

    remove(user: User): CircleMembers {
        const updatedMembers = this.members.filter(u => !u.equals(user));
        CircleMembersInvariants.enforce(this.owner, updatedMembers);
        return new CircleMembers(this.owner, updatedMembers);
    }

    removeMany(users: User[]): CircleMembers {
        const updatedMembers = this.members.filter(
            m => !users.some(u => u.equals(m))
        );
        CircleMembersInvariants.enforce(this.owner, updatedMembers);
        return new CircleMembers(this.owner, updatedMembers);
    }

    removeManyById(userIds: string[]): CircleMembers {
        const updatedMembers = this.members.filter(
            m => !userIds.some(id => id === m.id)
        )
        CircleMembersInvariants.enforce(this.owner, updatedMembers);
        return new CircleMembers(this.owner, updatedMembers);
    }

    setOwner(user: User): CircleMembers {
        if (user.id === this.owner.id) throw new Error("User is already owner.");
        if (!this.contains(user)) throw new Error("User is not in circle.");
        return new CircleMembers(user, this.members)
    }

    toString(): string {
        let s = "{ "
        for (let i = 0; i < this.members.length; i++) {
            const member = this.members[i];
            s += `${member.getUsername()}`;
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
