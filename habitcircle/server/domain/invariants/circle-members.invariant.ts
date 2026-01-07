import { DomainError } from "@/server/lib/errors";
import { CircleMember } from "@/server/domain/value-objects/circle/circle-member.value-object";

export class CircleMembersInvariants {
    
    static enforce(members: CircleMember[]): void {
        this.ensureNoDuplicates(members);
    }

    static ensureNoDuplicates(members: CircleMember[]): void  {
        const membersSet = new Set(members.map(u => u.userId));
        if (membersSet.size !== members.length) {
            throw new DomainError("Cannot contain duplicate members");
        }
    }
}