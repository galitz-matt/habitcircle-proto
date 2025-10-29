import { User } from "@server/domain/entities/user.entity"

// Mock bcrypt or hashing logic if Password uses it
// (optional if Password.create() already uses bcrypt)
jest.setTimeout(10000); // allow async hashing

describe("User Entity", () => {
  it("creates a valid User with hashed password", async () => {
    const user = await User.create("matt", "StrongPass123!");

    expect(user).toBeInstanceOf(User);
    expect(user.getUsername()).toBe("matt");
    expect(user.getPasswordHash()).not.toBe("StrongPass123!"); // should be hashed
    expect(user.getPasswordHash().length).toBeGreaterThan(10);
    expect(typeof user["id"]).toBe("string");
    expect(user["createdAt"]).toBeInstanceOf(Date);
  });

  it("verifies correct password successfully", async () => {
    const plain = "SecurePass123!";
    const user = await User.create("john", plain);
    const result = await user.verifyPassword(plain);
    expect(result).toBe(true);
  });

  it("rejects incorrect password", async () => {
    const user = await User.create("john", "SecurePass123!");
    const result = await user.verifyPassword("wrongpassword");
    expect(result).toBe(false);
  });

  it("rehydrates correctly from persistence", async () => {
    const user = await User.create("anna", "SomePassword123!");
    const rehydrated = User.rehydrate(
      user["id"],
      user["createdAt"],
      user.getUsername(),
      user.getPasswordHash(),
    );

    expect(rehydrated).toBeInstanceOf(User);
    expect(rehydrated.getUsername()).toBe(user.getUsername());
    expect(rehydrated.getPasswordHash()).toBe(user.getPasswordHash());
  });
});
