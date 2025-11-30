import { User } from "../entities/user.entity";
import { CircleMembersInvariants } from "../invariants/circle-members.invariant";

export class CircleMembers {
    private constructor(
        readonly owner: User,
        readonly members: Map<string, User>
    ) {
        this.members = new Map(members);
        Object.freeze(this.members);
        Object.freeze(this);
    }

    static create(owner: User, members: User[]): CircleMembers {
        CircleMembersInvariants.enforce(owner, members);
        return new CircleMembers(
            owner, 
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
            this.owner,
            [...this.members.values(), ...users]
        );
    }

    contains(user: User): boolean {
        return this.containsById(user.id);
    }

    containsById(userId: string): boolean {
        return this.members.has(userId);
    }

    removeMany(users: User[]): CircleMembers {
        return this.removeManyById(users.map(u => u.id));
    }

    removeManyById(userIds: string[]): CircleMembers {
        const clone = new Map(this.members);
        for (const id of userIds)
            clone.delete(id);
        
        return new CircleMembers(this.owner, clone);
    }

    setOwner(user: User): CircleMembers {
        if (user.id === this.owner.id) throw new Error("User is already owner.");
        if (!this.contains(user)) throw new Error("User is not in circle.");

        return new CircleMembers(user, this.members)
    }


    static rehydrate(owner: User, members: User[]): CircleMembers {
        return CircleMembers.create(owner, members);
    }

    private static toMap(users: User[]): Map<string, User> {
        return new Map(
            users.map(u => [u.id, u])
        );
    }
}
