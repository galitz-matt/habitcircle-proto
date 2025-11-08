import { IdGenerator } from "@/lib/utils";
import { Habit } from "@/server/domain/entities/habit.entity";
import { User } from "@/server/domain/entities/user.entity"
import { CircleName } from "@/server/domain/value-objects/circle-name.value-object";
import { CircleMembers } from "@/server/domain/value-objects/circle-members.value-object";
import { CircleHabits } from "@/server/domain/value-objects/circle-habits.value-object";

export class Circle {
    private constructor(
        readonly id: string,
        readonly createdAt: Date,
        readonly name: CircleName,
        readonly members: CircleMembers, // owner is an element of members
        readonly habits: CircleHabits
    ) {}

    static create(
        name: string, 
        owner: User, 
        members: User[], 
        habits: Habit[] = [],
    ): Circle {
        const circleName = CircleName.create(name);
        const circleMembers = CircleMembers.create(owner, members)
        const circleHabits = CircleHabits.create(habits);

        return new Circle(
            IdGenerator.new(), 
            new Date(), 
            circleName, 
            circleMembers, 
            circleHabits
        );
    }

    addHabit(habit: Habit): Circle {
        const updatedHabits = this.habits.add(habit);
        return this.clone({ habits: updatedHabits });
    }

    addHabits(habits: Habit[]): Circle {
        const updatedHabits = this.habits.addMany(habits);
        return this.clone({ habits: updatedHabits });
    }

    addMember(user: User): Circle {
        const updatedMembers = this.members.add(user);
        return this.clone({ members: updatedMembers });
    }

    addMembers(users: User[]): Circle {
        const updatedMembers = this.members.addMany(users);
        return this.clone({ members: updatedMembers });
    }

    getOwner(): User {
        return this.members.owner;
    }

    removeHabit(habit: Habit): Circle {
        const updatedHabits = this.habits.remove(habit);
        return this.clone({ habits: updatedHabits });
    }

    removeMember(user: User): Circle {
        const updatedMembers = this.members.remove(user);
        return this.clone({ members: updatedMembers });
    }

    static rehydrate(
        id: string,
        createdAt: Date,
        name: string,
        owner: User,
        members: User[],
        habits: Habit[]
    ): Circle {
        /* Used exclusively by repositories to reconstitue from persistence */

        const circleName = CircleName.rehydrate(name);
        const circleMembers = CircleMembers.rehydrate(owner, members);
        const circleHabits = CircleHabits.rehydrate(habits);


        return new Circle(
            id, 
            createdAt, 
            circleName, 
            circleMembers, 
            circleHabits
        )
    }

    setOwner(user: User): Circle {
        const updatedMembers = this.members.setOwner(user);
        return this.clone({ members: updatedMembers });
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

}