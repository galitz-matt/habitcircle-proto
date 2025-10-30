import { DomainError } from "@/lib/errors";
import { Habit } from "@/server/domain/entities/habit.entity";
import { CircleHabits } from "@/server/domain/value-objects/circle-habits.value-object";

const fixedDate = new Date("2024-01-01T00:00:00.000Z");

const createHabit = (
  id: string,
  name = `habit-${id}`,
  circleId = "circle-id",
): Habit => Habit.rehydrate(id, fixedDate, name, circleId);

describe("CircleHabits Value Object", () => {
  it("creates a CircleHabits instance when habits pass invariants", () => {
    const habitOne = createHabit("1");
    const habitTwo = createHabit("2");

    const circleHabits = CircleHabits.create([habitOne, habitTwo]);

    expect(circleHabits).toBeInstanceOf(CircleHabits);
    expect(circleHabits.getAll()).toEqual([habitOne, habitTwo]);
  });

  it("throws when creating with duplicate habit references", () => {
    const habit = createHabit("1");

    expect(() => CircleHabits.create([habit, habit])).toThrow(DomainError);
  });

  it("adds a habit immutably", () => {
    const habitOne = createHabit("1");
    const habitTwo = createHabit("2");
    const circleHabits = CircleHabits.create([habitOne]);

    const updated = circleHabits.add(habitTwo);

    expect(updated).not.toBe(circleHabits);
    expect(updated.getAll()).toEqual([habitOne, habitTwo]);
    expect(circleHabits.getAll()).toEqual([habitOne]);
  });

  it("throws when adding a duplicate habit", () => {
    const habitOne = createHabit("1");
    const circleHabits = CircleHabits.create([habitOne]);

    expect(() => circleHabits.add(habitOne)).toThrow(DomainError);
  });

  it("removes habits by id and returns a new instance", () => {
    const habitOne = createHabit("1");
    const habitTwo = createHabit("2");
    const circleHabits = CircleHabits.create([habitOne, habitTwo]);

    const updated = circleHabits.remove(habitOne);

    expect(updated).not.toBe(circleHabits);
    expect(updated.getAll()).toEqual([habitTwo]);
    expect(circleHabits.getAll()).toEqual([habitOne, habitTwo]);
  });

  it("compares equality by habit ids", () => {
    const habitOne = createHabit("1");
    const habitTwo = createHabit("2");
    const a = CircleHabits.create([habitOne, habitTwo]);
    const b = CircleHabits.create([habitTwo, habitOne]);
    const c = CircleHabits.create([habitOne]);

    expect(a.equals(b)).toBe(true);
    expect(a.equals(c)).toBe(false);
  });

  it("rehydrates without enforcing invariants", () => {
    const habitOne = createHabit("1");
    const habitTwo = createHabit("2");
    const rehydrated = CircleHabits.rehydrate([habitOne, habitTwo]);

    expect(rehydrated.getAll()).toEqual([habitOne, habitTwo]);
  });

  it("produces a readable string", () => {
    const habitOne = createHabit("1", "Meditate");
    const habitTwo = createHabit("2", "Exercise");
    const circleHabits = CircleHabits.create([habitOne, habitTwo]);

    expect(circleHabits.toString()).toBe("{ Meditate, Exercise }");
  });
});
