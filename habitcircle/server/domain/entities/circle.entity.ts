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
        readonly habits: CircleHabits,
        readonly photoKey?: string
    ) {}

    static create(
        circleName: CircleName,
        circleMembers: CircleMembers,
        circleHabits: CircleHabits,
        photoKey?: string
    ): Circle {
        return new Circle(
            IdGenerator.new(), 
            new Date(), 
            circleName, 
            circleMembers, 
            circleHabits,
            photoKey
        );
    }

    addHabit(habit: Habit): Circle {
        return this.addHabits([habit]);
    }

    addHabits(habits: Habit[]): Circle {
        const updatedHabits = this.habits.addMany(habits);
        return this.clone({ habits: updatedHabits });
    }

    addMember(user: User): Circle {
        return this.addMembers([user]);
    }

    addMembers(users: User[]): Circle {
        const updatedMembers = this.members.addMany(users);
        return this.clone({ members: updatedMembers });
    }

    getHabits(): Habit[] {
        return this.habits.getAll();
    }

    getMembers(): User[] {
        return this.members.getAll();
    }

    getName(): string {
        return this.name.get();
    }

    getOwner(): User {
        return this.members.owner;
    }

    hasHabitById(habitId: string) {
        return this.habits.containsById(habitId);
    }

    hasMember(user: User): boolean {
        return this.members.contains(user);
    }

    hasMemberById(userId: string): boolean {
        return this.members.containsById(userId);
    }

    isOwnedBy(userId: string): boolean {
        return this.getOwner().id === userId;
    }

    removeHabit(habit: Habit): Circle {
        const updatedHabits = this.habits.remove(habit);
        return this.clone({ habits: updatedHabits });
    }

    removeHabits(habits: Habit[]): Circle {
        const updatedHabits = this.habits.removeMany(habits);
        return this.clone({ habits: updatedHabits });
    }

    removeHabitsById(habitIds: string[]): Circle {
        const updatedHabits = this.habits.removeManyById(habitIds);
        return this.clone({ habits: updatedHabits });
    }

    removeMember(user: User): Circle {
        const updatedMembers = this.members.remove(user);
        return this.clone({ members: updatedMembers });
    }

    removeMembers(users: User[]): Circle {
        const updatedMembers = this.members.removeMany(users);
        return this.clone({ members: updatedMembers });
    }

    removeMembersById(userIds: string[]): Circle {
        const updatedMembers = this.members.removeManyById(userIds);
        return this.clone({ members: updatedMembers });
    }

    static rehydrate(
        id: string,
        createdAt: Date,
        name: string,
        owner: User,
        members: User[],
        habits: Habit[],
        photoKey?: string,
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
            circleHabits,
            photoKey
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