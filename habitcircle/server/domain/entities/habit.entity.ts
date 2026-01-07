import { IdGenerator } from "@/server/lib/utils";
import { HabitName } from "@/server/domain/value-objects/habit-name.value-object";

export type CreateHabitProps = {
    name: string,
    circleId: string
}

export class Habit {
    private constructor(
        private readonly _id: string,
        private readonly _createdAt: Date,
        private _name: HabitName,
        private readonly _circleId: string
    ) {}

    static create(props: CreateHabitProps): Habit {
        return new Habit(
            IdGenerator.new(),
            new Date(),
            HabitName.create(props.name),
            props.circleId
        );
    }

    equals(other: Habit): boolean {
        return !!other && other.id == this.id;
    }

    getName() {
        return this._name.value;
    }

    get id() {
        return this._id;
    }

    get createdAt() {
        return this._createdAt;
    }

    get circleId() {
        return this._circleId;
    }

    get name() {
        return this._name;
    }

    static rehydrate(
        id: string,
        createdAt: Date,
        name: HabitName,
        circleId: string
    ): Habit {
        /* Used exclusively by repositories to reconstitue from persistence */
        return new Habit(
            id,
            new Date(createdAt.getTime()),
            name,
            circleId
        )
    }
}