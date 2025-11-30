import { User } from "@/server/domain/entities/user.entity";
import { DomainError } from "@/lib/errors";

export class CircleMembersInvariants {
    
    static enforce(members: User[]): void {
        this.ensureNoDuplicates(members);
    }

    static ensureNoDuplicates(members: User[]): void  {
        const membersSet = new Set(members.map(u => u.id));
        if (membersSet.size !== members.length) {
            throw new DomainError("Cannot contain duplicate members");
        }
    }
}