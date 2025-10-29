import { DomainError } from "@lib/errors";
import { Habit } from "@server/domain/entities/habit.entity";
import { CircleHabitsInvariants } from "@server/domain/invariants/circle-habits.invariant";

const fixedDate = new Date("2024-01-01T00:00:00.000Z");

const createHabit = (
  id: string,
  circleId = "circle-id",
  name = `habit-${id}`,
): Habit => {
  return Habit.rehydrate(id, fixedDate, name, circleId);
};

describe("CircleHabitsInvariants", () => {
  it("allows unique habit instances", () => {
    const habits = [createHabit("1"), createHabit("2"), createHabit("3")];

    expect(() => CircleHabitsInvariants.enforce(habits)).not.toThrow();
  });

  it("throws when duplicate instances are present", () => {
    const habit = createHabit("1");

    expect(() =>
      CircleHabitsInvariants.enforce([habit, habit]),
    ).toThrow(DomainError);
  });

  it("allows habits with shared ids if they are distinct instances", () => {
    const habit = createHabit("1");
    const duplicate = Habit.rehydrate(
      habit["id"],
      fixedDate,
      habit.getName(),
      "circle-id",
    );

    expect(() => CircleHabitsInvariants.enforce([habit, duplicate])).not.toThrow();
  });
});
