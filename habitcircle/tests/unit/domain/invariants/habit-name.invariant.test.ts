import { DomainError } from "@/lib/errors";
import { HabitNameInvariants } from "@/server/domain/invariants/habit-name.invariant";

describe("HabitNameInvariants", () => {
  it("allows a name between 2 and 50 characters", () => {
    expect(() => HabitNameInvariants.enforce("MorningRun")).not.toThrow();
  });

  it("throws when the name is shorter than 2 characters", () => {
    expect(() => HabitNameInvariants.enforce("A")).toThrow(DomainError);
  });

  it("throws when the name exceeds 50 characters", () => {
    const tooLong = "b".repeat(51);
    expect(() => HabitNameInvariants.enforce(tooLong)).toThrow(DomainError);
  });
});
