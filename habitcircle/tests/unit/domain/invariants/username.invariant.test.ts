import { DomainError } from "@lib/errors";
import { UsernameInvariants } from "@server/domain/invariants/username.invariant";

describe("UsernameInvariants", () => {
  it("allows a valid username", () => {
    expect(() => UsernameInvariants.enforce("valid_user")).not.toThrow();
  });

  it("throws when username is shorter than 3 characters", () => {
    expect(() => UsernameInvariants.enforce("ab")).toThrow(DomainError);
  });

  it("throws when username is longer than 40 characters", () => {
    const longUsername = "a".repeat(41);
    expect(() => UsernameInvariants.enforce(longUsername)).toThrow(DomainError);
  });

  it("throws when username is reserved", () => {
    expect(() => UsernameInvariants.enforce("admin")).toThrow(DomainError);
  });

  it("throws when username includes invalid characters", () => {
    expect(() => UsernameInvariants.enforce("invalid!")).toThrow(DomainError);
  });

  it("throws when username includes whitespace", () => {
    expect(() => UsernameInvariants.enforce("user name")).toThrow(DomainError);
  });
});
