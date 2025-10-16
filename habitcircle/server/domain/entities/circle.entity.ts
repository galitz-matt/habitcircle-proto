import { IdGenerator } from "@lib/utils";
import { Habit } from "@server/domain/entities/habit.entity";
import { User } from "@server/domain/entities/user.entity"

export class Circle {
    private constructor(
        readonly id: string,
        readonly createdAt: Date,
        readonly name: string,
        readonly owner: User,
        readonly members: User[], // owner is an element of members
        readonly habits: Habit[]
    ) {}

    static create(
        name: string, 
        owner: User, 
        members: User[] = [owner], 
        habits: Habit[] = []
    ): Circle {
        if (!name.trim()) throw new Error("Name cannot be empty");

        return new Circle(
            IdGenerator.new(), 
            new Date(), 
            name, 
            owner, 
            members, 
            habits
        );
    }

    private clone(changes: Partial<Circle>): Circle {
        return new Circle(
            changes.id ?? this.id,
            changes.createdAt ?? this.createdAt,
            changes.name ?? this.name,
            changes.owner ?? this.owner,
            changes.members ?? this.members,
            changes.habits ?? this.habits,
        )
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
        return new Circle(id, createdAt, name, owner, members, habits)
    }

    addMember(user: User): Circle {
        if (this.members.some(u => u.id === user.id)) throw new Error("User is already member of this circle");
        return this.clone({ members: [...this.members, user] });
    }
    
    addHabit(habit: Habit): Circle {
        if (habit.circleId !== this.id) throw new Error("Habit does not belong to this circle")
        if (this.habits.some(h => h.id === habit.id)) throw new Error("Habit is already in this circle");
        return this.clone({ habits: [...this.habits, habit] })
    }

    deleteMember(user: User): Circle {
        if (user.id === this.owner.id) throw new Error("Owner cannot be removed from their own circle");
        if (!this.members.find(u => u.id === user.id)) throw new Error("User is not in circle");
        return this.clone({ members: this.members.filter(u => u.id !== user.id) })
    }

    deleteHabit(habit: Habit): Circle {
        if (habit.circleId !== this.id) throw new Error("Habit does not belong to this circle");
        if (!this.habits.find(h => h.id === habit.id)) throw new Error("Habit is not in circle");
        return this.clone({ habits: this.habits.filter(h => h.id !== habit.id )})
    }
}