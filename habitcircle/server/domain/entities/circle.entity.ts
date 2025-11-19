import { IdGenerator } from "@/lib/utils";
import { Habit } from "@/server/domain/entities/habit.entity";
import { User } from "@/server/domain/entities/user.entity"
import { CircleName } from "@/server/domain/value-objects/circle-name.value-object";
import { CircleMembers } from "@/server/domain/value-objects/circle-members.value-object";
import { CircleHabits } from "@/server/domain/value-objects/circle-habits.value-object";
import { Entity } from "./entity.abc";

export type CircleProps = {
    id: string,
    createdAt: Date,
    name: CircleName,
    members: CircleMembers,
    habits: CircleHabits,
    photoKey?: string
}

export type CreateCircleInput = {
    name: CircleName,
    members: CircleMembers,
    habits: CircleHabits,
    photoKey?: string
}

export class Circle extends Entity<CircleProps> {

    private constructor(props: CircleProps) { super(props); }

    static create(input: CreateCircleInput): Circle {
        const props: CircleProps = {
            id: IdGenerator.new(),
            createdAt: new Date(),
            ...input
        };

        return new Circle(props);
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

    setOwner(user: User): Circle {
        const updatedMembers = this.members.setOwner(user);
        return this.clone({ members: updatedMembers });
    }

    get name(): CircleName {
        return this.props.name;
    }

    get members(): CircleMembers {
        return this.props.members;
    }

    get habits(): CircleHabits {
        return this.props.habits;
    }

    static rehydrate(input: CircleProps): Circle {
        /* Used exclusively by repositories to reconstitue from persistence */
        const props: CircleProps = {
            id: input.id,
            createdAt: input.createdAt,
            name: input.name,
            members: input.members,
            habits: input.habits,
            photoKey: input.photoKey
        }

        return new Circle(props);
    }
    
    protected create(props: CircleProps): this {
        return new Circle(props) as this;
    }
}