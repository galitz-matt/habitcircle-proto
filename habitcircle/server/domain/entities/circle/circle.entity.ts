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
        private _owner: User,
        private _members: CircleMembers,
        private _habits: CircleHabits,
        private _photoKey?: string
    ) {}

    static create(
        name: CircleName,
        owner: User,
        members: CircleMembers,
        habits: CircleHabits,
        photoKey?: string
    ): Circle {
        return new Circle(
            IdGenerator.new(),
            new Date(),
            name,
            owner,
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
        return this._owner.id === userId;
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
        if (!this.hasMember(user))
            throw new DomainError("User is not member of Circle");

        return this.removeMembers([user]);
    }

    removeMembers(users: User[]): this {
        return this.removeMembersById(
            users.map(u => u.id)
        );
    }

    removeMembersById(userIds: string[]): this {
        if (userIds.some(id => id === this._owner.id))
            throw new DomainError("Cannot remove owner");

        this._members = this._members.removeManyById(userIds);
        return this;
    }

    setOwner(user: User): this {
        if (this._owner.equals(user))
            throw new DomainError("User is already owner");
        if (!this.hasMember(user))
            throw new DomainError("User is not a member of the circle");

        this.addMember(this._owner)
        this.removeMember(user)

        this._owner = user;
        return this;
    }

    get id(): string {
        return this._id;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    get photoKey(): string | undefined {
        return this._photoKey;
    }

    get owner(): User {
        return this._owner;
    }

    static rehydrate(
        id: string,
        createdAt: Date,
        name: CircleName,
        owner: User,
        members: CircleMembers,
        habits: CircleHabits,
        photoKey?: string
    ): Circle {
        /* Used exclusively by repositories to reconstitue from persistence */
        return new Circle(
            id,
            createdAt,
            name,
            owner,
            members,
            habits,
            photoKey
        );
    }
}