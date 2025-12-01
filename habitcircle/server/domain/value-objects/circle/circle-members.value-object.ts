import { CircleMembersInvariants } from "@/server/domain/invariants/circle-members.invariant";
import { CircleMember } from "@/server/domain/value-objects/circle/circle-member.value-object";

export class CircleMembers {
    private constructor(
        readonly members: Map<string, CircleMember>
    ) {
        this.members = new Map(members);
        Object.freeze(this.members);
        Object.freeze(this);
    }

    static create(members: CircleMember[]): CircleMembers {
        CircleMembersInvariants.enforce(members);
        return new CircleMembers(
            CircleMembers.toMap(members)
        );
    }

    getAll(): CircleMember[] {
        return [...this.members.values()];
    }

    addMany(members: CircleMember[]): CircleMembers {
        return CircleMembers.create(
            [...this.members.values(), ...members]
        );
    }

    contains(member: CircleMember): boolean {
        return this.containsById(member.userId);
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


    static rehydrate(members: CircleMember[]): CircleMembers {
        return new CircleMembers(
            CircleMembers.toMap(members)
        );
    }

    static rehydrateFromCircleMembers(members: CircleMember[]): CircleMembers {
        return new CircleMembers(
            CircleMembers.toMap(members)
        );
    }

    private static toMap(members: CircleMember[]): Map<string, CircleMember> {
        return new Map(
            members.map(m => [m.userId, m])
        );
    }
}
