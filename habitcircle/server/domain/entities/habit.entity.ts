import { IdGenerator } from "@/lib/utils";
import { HabitName } from "@/server/domain/value-objects/habit-name.value-object";

export class Habit {
    private constructor(
        readonly id: string,
        readonly createdAt: Date,
        readonly name: HabitName,
        readonly circleId: string,
    ) {}

    static create(name: string, circleId: string): Habit {
        const habitName = HabitName.create(name); 
        
        return new Habit(IdGenerator.new(), new Date(), habitName, circleId);
    }

    equals(other: Habit): boolean {
        return !!other && other.id == this.id;
    }

    getName(): string {
        return this.name.name;
    }

    static rehydrate(
        id: string,
        createdAt: Date,
        name: string,
        circleId: string
    ): Habit {
        /* Used exclusively by repositories to reconstitue from persistence */
        return new Habit(id, createdAt, HabitName.rehydrate(name), circleId);
    }

    setName(name: string): Habit {
        const updatedName = HabitName.create(name);
        return this.clone({ name: updatedName })
    }

    private clone(changes: Partial<Habit>): Habit {
        return new Habit(
            changes.id ?? this.id,
            changes.createdAt ?? this.createdAt,
            changes.name ?? this.name,
            changes.circleId ?? this.circleId
        )
    }
}