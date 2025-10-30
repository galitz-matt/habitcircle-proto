import { DomainError } from "@/lib/errors";
import { PasswordInvariants } from "@/server/domain/invariants/password.invariant";

const basePassword = "ValidPass123!";

describe("PasswordInvariants", () => {
  it("allows a valid password", () => {
    expect(() => PasswordInvariants.enforce(basePassword)).not.toThrow();
  });

  it("throws when password is shorter than 12 characters", () => {
    const shortPassword = "Abcdef!123";
    expect(() => PasswordInvariants.enforce(shortPassword)).toThrow(DomainError);
  });

  it("throws when password exceeds 1000 characters", () => {
    const longPassword = `${"A".repeat(1000)}!`;
    expect(() => PasswordInvariants.enforce(longPassword)).toThrow(DomainError);
  });

  it("throws when password contains whitespace", () => {
    const passwordWithSpace = "Valid Pass123!";
    expect(() => PasswordInvariants.enforce(passwordWithSpace)).toThrow(
      DomainError,
    );
  });

  it("throws when password lacks uppercase characters", () => {
    const noUppercase = "validpass123!";
    expect(() => PasswordInvariants.enforce(noUppercase)).toThrow(DomainError);
  });

  it("throws when password lacks lowercase characters", () => {
    const noLowercase = "VALIDPASS123!";
    expect(() => PasswordInvariants.enforce(noLowercase)).toThrow(DomainError);
  });

  it("throws when password lacks special characters", () => {
    const noSpecial = "ValidPass1234";
    expect(() => PasswordInvariants.enforce(noSpecial)).toThrow(DomainError);
  });
});
