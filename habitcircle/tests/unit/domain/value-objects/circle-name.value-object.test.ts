import { CircleName } from "@server/domain/value-objects/circle-name.value-object";

describe("CircleName Value Object", () => {
  it("creates a CircleName with normalized value", () => {
    const circleName = CircleName.create("  Morning Crew  ");

    expect(circleName.get()).toBe("Morning Crew");
    expect(circleName.toString()).toBe("Morning Crew");
  });

  it("allows special characters permitted by invariant rules", () => {
    const circleName = CircleName.create("Crew-01");

    expect(circleName.get()).toBe("Crew-01");
  });

  it("compares equality by normalized value", () => {
    const a = CircleName.create(" crew ");
    const b = CircleName.create("crew");

    expect(a.equals(b)).toBe(true);
  });

  it("rehydrates without normalization", () => {
    const circleName = CircleName.rehydrate("Persisted Name");

    expect(circleName.get()).toBe("Persisted Name");
  });
});
