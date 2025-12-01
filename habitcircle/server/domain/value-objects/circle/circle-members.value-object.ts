import { User } from "../entities/user.entity";
import { CircleMembersInvariants } from "../invariants/circle-members.invariant";

export class CircleMembers {
    private constructor(
        readonly members: Map<string, User>
    ) {
        this.members = new Map(members);
        Object.freeze(this.members);
        Object.freeze(this);
    }

    static create(members: User[]): CircleMembers {
        CircleMembersInvariants.enforce(members);
        return new CircleMembers(
            CircleMembers.toMap(members)
        );
    }

    getAll(): User[] {
        return [...this.members.values()];
    }

    add(user: User): CircleMembers {
        return this.addMany([user]);
    }

    addMany(users: User[]): CircleMembers {
        return CircleMembers.create(
            [...this.members.values(), ...users]
        );
    }

    contains(user: User): boolean {
        return this.containsById(user.id);
    }

    containsById(userId: string): boolean {
        return this.members.has(userId);
    }

    removeManyById(userIds: string[]): CircleMembers {
        const clone = new Map(this.members);
        for (const id of userIds)
            clone.delete(id);
        
        return new CircleMembers(clone);
    }


    static rehydrate(members: User[]): CircleMembers {
        return new CircleMembers(
            CircleMembers.toMap(members)
        );
    }

    private static toMap(users: User[]): Map<string, User> {
        return new Map(
            users.map(u => [u.id, u])
        );
    }
}
