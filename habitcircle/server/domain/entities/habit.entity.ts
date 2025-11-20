import { IdGenerator } from "@/lib/utils";
import { HabitName } from "@/server/domain/value-objects/habit-name.value-object";

export type HabitProps = {
    id: string,
    createdAt: Date,
    name: HabitName,
    circleId: string
}

export type CreateHabitInput = {
    name: HabitName,
    circleId: string
}

export class Habit {
    private constructor(readonly props: HabitProps) {}

    static create(input: CreateHabitInput): Habit {
        const props: HabitProps = {
            id: IdGenerator.new(),
            createdAt: new Date(),
            name: input.name,
            circleId: input.circleId
        }

        return new Habit(props);
    }

    equals(other: Habit): boolean {
        return !!other && other.id == this.id;
    }

    get id(): string {
        return this.props.id;
    }

    get createdAt(): Date {
        return this.props.createdAt;
    }

    get name(): HabitName {
        return this.props.name;
    }

    get circleId(): string {
        return this.props.circleId;
    }

    static rehydrate(props: HabitProps): Habit {
        /* Used exclusively by repositories to reconstitue from persistence */
        return new Habit(props);
    }

    private clone(changes: Partial<HabitProps>): Habit {
        return new Habit({ ...this.props, ...changes });
    }
}