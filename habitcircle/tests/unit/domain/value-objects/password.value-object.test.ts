import { Password } from "@/server/domain/value-objects/password.value-object";

jest.setTimeout(10000); // allow bcrypt hashing

const VALID_PASSWORD = "ValidPass123!";

describe("Password Value Object", () => {
  it("hashes the password during creation", async () => {
    const password = await Password.create(VALID_PASSWORD);

    expect(password).toBeInstanceOf(Password);
    expect(password.toString()).not.toBe(VALID_PASSWORD);
    expect(password.toString()).toMatch(/^\$2[aby]\$\d{2}\$/);
  });

  it("matches returns true for the correct password and false otherwise", async () => {
    const password = await Password.create(VALID_PASSWORD);

    await expect(password.matches(VALID_PASSWORD)).resolves.toBe(true);
    await expect(password.matches("WrongPass123!")).resolves.toBe(false);
  });

  it("equals compares stored hashes", async () => {
    const password = await Password.create(VALID_PASSWORD);
    const sameHash = Password.rehydrate(password.toString());
    const different = await Password.create("AnotherValidPass123!");

    expect(password.equals(sameHash)).toBe(true);
    expect(password.equals(different)).toBe(false);
  });

  it("rehydrates from a persisted hash", async () => {
    const password = await Password.create(VALID_PASSWORD);
    const rehydrated = Password.rehydrate(password.toString());

    expect(rehydrated.toString()).toBe(password.toString());
    await expect(rehydrated.matches(VALID_PASSWORD)).resolves.toBe(true);
  });
});
