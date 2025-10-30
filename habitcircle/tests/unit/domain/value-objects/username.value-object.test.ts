import { DomainError } from "@/lib/errors";
import { Username } from "@/server/domain/value-objects/username.value-object";

describe("Username Value Object", () => {
  it("creates and normalizes the username value", () => {
    const username = Username.create("  TestUser  ");

    expect(username.toString()).toBe("TestUser");
  });

  it("rejects invalid usernames via invariants", () => {
    expect(() => Username.create("in valid")).toThrow(DomainError);
  });

  it("compares equality ignoring case", () => {
    const a = Username.create("TestUser");
    const b = Username.create("testuser");

    expect(a.equals(b)).toBe(true);
  });

  it("rehydrates without normalization", () => {
    const username = Username.rehydrate("PersistedUser");

    expect(username.toString()).toBe("PersistedUser");
  });
});
