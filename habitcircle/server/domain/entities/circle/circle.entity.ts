import { IdGenerator } from "@/lib/utils";
import { CreateHabitProps, Habit } from "@/server/domain/entities/habit.entity";
import { CircleName } from "@/server/domain/value-objects/circle/circle-name.value-object";
import { CircleMembers } from "@/server/domain/value-objects/circle/circle-members.value-object";
import { CircleHabits } from "@/server/domain/value-objects/circle/circle-habits.value-object";
import { DomainError } from "@/lib/errors";
import { CircleMember } from "../../value-objects/circle/circle-member.value-object";
import type { User } from "../user.entity";

export type CreateCircleProps = {
    name: string;
    owner: User;
    members: User[];
    habits: CreateHabitProps[];
    photoKey?: string;
}

export class Circle {

    private constructor(
        private readonly _id: string,
        private readonly _createdAt: Date,
        private _name: CircleName,
        private _owner: CircleMember,
        private _members: CircleMembers,
        private _habits: CircleHabits,
        private _photoKey?: string
    ) {}

    static create(props: CreateCircleProps): Circle {
        return new Circle(
            IdGenerator.new(),
            new Date(),
            CircleName.create(props.name),
            CircleMember.fromUser(props.owner),
            CircleMembers.create(props.members.map(u => CircleMember.fromUser(u))),
            CircleHabits.create(props.habits.map(h => Habit.create(h))),
            props.photoKey
        );
    }

    addHabit(habit: Habit): this {
        if (this.hasHabitById(habit.id))
            throw new DomainError("Habit already in circle");
        return this.addHabits([habit]);
    }

    addHabits(habits: Habit[]): this {
        for (const h of habits) {
            if (this.hasHabitById(h.id))
                throw new DomainError(`Habit with id ${h.id} already in circle`);
        }
        this._habits = this._habits.addMany(habits);
        return this;
    }

    addMember(member: CircleMember): this {
        return this.addMembers([member]);
    }

    addMembers(members: CircleMember[]): this {
        for (const m of members) {
            if (this.hasMember(m))
                throw new DomainError(`User with id ${m.userId} already in circle`);
        }
        
        this._members = this._members.addMany(members);
        return this;
    }

    getHabits(): Habit[] {
        return this._habits.getAll();
    }

    getMembers(): CircleMember[] {
        return this._members.getAll();
    }

    getName(): string {
        return this._name.toString();
    }

    hasHabitById(habitId: string) {
        return this._habits.containsById(habitId);
    }

    hasMember(member: CircleMember): boolean {
        return this._members.contains(member);
    }

    hasMemberById(userId: string): boolean {
        return this._members.containsById(userId);
    }

    isOwnedBy(userId: string): boolean {
        return this._owner.userId === userId;
    }

    removeHabit(habitId: string): this {
        this._habits = this._habits.remove(habitId);
        return this;
    }

    removeHabits(habitIds: string[]): this {
        for (const id of habitIds) {
            if (!this.hasHabitById(id))
                throw new DomainError(`Habit with id ${id} not in Circle`);
        }
        this._habits = this._habits.removeMany(habitIds);
        return this;
    }

    removeMember(member: CircleMember): this {
        return this.removeMembers([member]);
    }

    removeMembers(members: CircleMember[]): this {
        return this.removeMembersById(
            members.map(m => m.userId)
        );
    }

    removeMembersById(userIds: string[]): this {
        for (const id of userIds) {
            if (!this.hasMemberById(id))
                throw new DomainError(`User with ${id} is not a member of the circle`)
            if (id === this._owner.userId)
                throw new DomainError("Cannot remove owner");
        }

        this._members = this._members.removeManyById(userIds);
        return this;
    }

    setOwner(member: CircleMember): this {
        if (this._owner.userId === member.userId)
            throw new DomainError("User is already owner");
        if (!this.hasMember(member))
            throw new DomainError("User is not a member of the circle");

        this._members = this._members.removeManyById([member.userId])
                            .addMany([this._owner]);

        this._owner = member;
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

    get owner(): CircleMember {
        return this._owner;
    }

    static rehydrate(
        id: string,
        createdAt: Date,
        name: CircleName,
        owner: CircleMember,
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