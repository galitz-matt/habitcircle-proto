import { HabitName } from "@/server/domain/value-objects/habit-name.value-object";

describe("HabitName Value Object", () => {
  it("creates a HabitName with normalized value", () => {
    const habitName = HabitName.create("  Morning Run  ");

    expect(habitName.toString()).toBe("Morning Run");
  });

  it("compares equality based on normalized value", () => {
    const a = HabitName.create(" focus ");
    const b = HabitName.create("focus");

    expect(a.equals(b)).toBe(true);
  });

  it("rehydrates without normalization", () => {
    const habitName = HabitName.rehydrate("Persisted Habit");

    expect(habitName.toString()).toBe("Persisted Habit");
  });
});
