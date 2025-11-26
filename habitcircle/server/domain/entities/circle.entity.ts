import { IdGenerator } from "@/lib/utils";
import { Habit } from "@/server/domain/entities/habit.entity";
import { User } from "@/server/domain/entities/user.entity"
import { CircleName } from "@/server/domain/value-objects/circle-name.value-object";
import { CircleMembers } from "@/server/domain/value-objects/circle-members.value-object";
import { CircleHabits } from "@/server/domain/value-objects/circle-habits.value-object";
import { DomainError } from "@/lib/errors";

export class Circle {

    private constructor(
        private readonly _id: string,
        private readonly _createdAt: Date,
        private _name: CircleName,
        private _members: CircleMembers,
        private _habits: CircleHabits,
        private _photoKey?: string
    ) {}

    static create(
        name: CircleName,
        members: CircleMembers,
        habits: CircleHabits,
        photoKey?: string
    ): Circle {
        return new Circle(
            IdGenerator.new(),
            new Date(),
            name,
            members,
            habits,
            photoKey
        );
    }

    addHabit(habit: Habit): this {
        return this.addHabits([habit]);
    }

    addHabits(habits: Habit[]): this {
        this._habits = this._habits.addMany(habits);
        return this;
    }

    addMember(user: User): this {
        return this.addMembers([user]);
    }

    addMembers(users: User[]): this {
        this._members = this._members.addMany(users);
        return this;
    }

    getHabits(): Habit[] {
        return this._habits.getAll();
    }

    getMembers(): User[] {
        return this._members.getAll();
    }

    getName(): string {
        return this._name.toString();
    }

    getOwner(): User {
        return this._members.owner;
    }

    hasHabitById(habitId: string) {
        return this._habits.containsById(habitId);
    }

    hasMember(user: User): boolean {
        return this._members.contains(user);
    }

    hasMemberById(userId: string): boolean {
        return this._members.containsById(userId);
    }

    isOwnedBy(userId: string): boolean {
        return this.getOwner().id === userId;
    }

    removeHabit(habitId: string): this {
        this._habits = this._habits.remove(habitId);
        return this;
    }

    removeHabits(habitIds: string[]): this {
        this._habits = this._habits.removeMany(habitIds);
        return this;
    }

    removeMember(user: User): this {
        return this.removeMembers([user]);
    }

    removeMembers(users: User[]): this {
        if (users.some(u => u.equals(this.owner)))
            throw new DomainError("Cannot remove owner");

        this._members = this._members.removeMany(users);
        return this;
    }

    removeMembersById(userIds: string[]): this {
        if (userIds.some(id => id === this.owner.id))
            throw new DomainError("Cannot remove owner");

        this._members = this._members.removeManyById(userIds);
        return this;
    }

    setOwner(user: User): this {
        this._members = this._members.setOwner(user);
        return this;
    }

    get owner() {
        return this._members.owner;
    }

    static rehydrate(
        id: string,
        createdAt: Date,
        name: CircleName,
        members: CircleMembers,
        habits: CircleHabits,
        photoKey?: string
    ): Circle {
        /* Used exclusively by repositories to reconstitue from persistence */
        return new Circle(
            id,
            createdAt,
            name,
            members,
            habits,
            photoKey
        );
    }
}