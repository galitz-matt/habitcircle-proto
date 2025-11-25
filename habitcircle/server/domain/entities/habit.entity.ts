import { IdGenerator } from "@/lib/utils";
import { HabitName } from "@/server/domain/value-objects/habit-name.value-object";

export class Habit {
    private constructor(
        private readonly _id: string,
        private readonly _createdAt: Date,
        private _name: HabitName,
        private readonly _circleId: string
    ) {}

    static create(name: HabitName, circleId: string): Habit {
        return new Habit(
            IdGenerator.new(),
            new Date(),
            name,
            circleId
        );
    }

    equals(other: Habit): boolean {
        return !!other && other.id == this.id;
    }

    get id() {
        return this._id;
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