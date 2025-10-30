import { DomainError } from "@/lib/errors";
import { CircleNameInvariants } from "@/server/domain/invariants/circle-name.invariant";

describe("CircleNameInvariants", () => {
  it("allows a valid circle name", () => {
    expect(() => CircleNameInvariants.enforce("MorningCrew")).not.toThrow();
  });

  it("throws when circle name is empty", () => {
    expect(() => CircleNameInvariants.enforce("")).toThrow(DomainError);
  });

  it("throws when circle name exceeds 100 characters", () => {
    const tooLong = "a".repeat(101);
    expect(() => CircleNameInvariants.enforce(tooLong)).toThrow(DomainError);
  });

  it("throws when circle name contains invalid characters", () => {
    expect(() => CircleNameInvariants.enforce("Crew!")).toThrow(DomainError);
  });
});
