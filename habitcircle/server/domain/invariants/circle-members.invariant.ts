import { User } from "../entities/user.entity";
import { DomainError } from "@lib/errors";

export class CircleMembersInvariants {
    
    static enforce(owner: User, members: User[]): void {
        this.ensureOwnerIncluded(owner, members);
        this.ensureNoDuplicates(members);
    }

    static ensureOwnerIncluded(owner: User, members: User[]): void {
        if (!members.includes(owner)) {
            throw new DomainError("Owner must be included in Circle members");
        }
    }

    static ensureNoDuplicates(members: User[]): void  {
        const membersSet = new Set(members.map(u => u.id));
        if (membersSet.size !== members.length) {
            throw new DomainError("Cannot contain duplicate members");
        }
    }
}