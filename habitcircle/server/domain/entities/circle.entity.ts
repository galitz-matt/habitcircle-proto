import { IdGenerator } from "@lib/utils";
import { Habit } from "@server/domain/entities/habit.entity";
import { User } from "@server/domain/entities/user.entity"
import { CircleName } from "../value-objects/circle-name.value-object";
import { CircleMembers } from "../value-objects/circle-members.value-object";

export class Circle {
    private constructor(
        readonly id: string,
        readonly createdAt: Date,
        readonly name: CircleName,
        readonly members: CircleMembers, // owner is an element of members
        readonly habits: Habit[]
    ) {}

    static create(
        name: string, 
        owner: User, 
        members: User[], 
        habits: Habit[] = [],
    ): Circle {
        const circleName = CircleName.create(name);
        const circleMembers = CircleMembers.create(owner, members)

        return new Circle(
            IdGenerator.new(), 
            new Date(), 
            circleName, 
            circleMembers, 
            habits
        );
    }

    private clone(changes: Partial<Circle>): Circle {
        return new Circle(
            changes.id ?? this.id,
            changes.createdAt ?? this.createdAt,
            changes.name ?? this.name,
            changes.members ?? this.members,
            changes.habits ?? this.habits,
        )
    }

    addMember(user: User): Circle {
        const updatedMembers = this.members.addMember(user);
        return this.clone({ members: updatedMembers });
    }

    removeMember(user: User): Circle {
        const updatedMembers = this.members.removeMember(user);
        return this.clone({ members: updatedMembers });
    }

    addHabit(habit: Habit): Circle {
        return this.clone({});
    }

    deleteHabit(habit: Habit): Circle {
        return this.clone({});
    }

    static rehydrate(
        id: string,
        createdAt: Date,
        name: string,
        members: CircleMembers,
        habits: Habit[]
    ): Circle {
        /* Used exclusively by repositories to reconstitue from persistence */
        return new Circle(id, createdAt, CircleName.create(name), members, habits)
    }

}