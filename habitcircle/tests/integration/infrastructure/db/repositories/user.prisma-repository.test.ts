import { prisma } from "@/tests/integration/setup/jest.setup";
import { UserPrismaRepository } from "@/server/infrastructure/db/repositories/user.prisma-repository";
import { User } from "@/server/domain/entities/user.entity";

describe("UserPrismaRepository (integration)", () => {
  let repo: UserPrismaRepository;
  let user: User;

  beforeEach(async () => {
    repo = new UserPrismaRepository(prisma);

    user = User.rehydrate("u1", new Date(), "john_doe", "hashed_pw");

    await prisma.user.create({
      data: {
        id: user.id,
        username: user.getUsername(),
        password: user.getPasswordHash(),
      },
    });
  });

  it("findById() returns the correct user", async () => {
    const found = await repo.findById(user.id);

    expect(found).not.toBeNull();
    expect(found?.id).toBe(user.id);
    expect(found?.getUsername()).toBe("john_doe");
  });

  it("findByUsername() returns the correct user", async () => {
    const found = await repo.findByUsername("john_doe");

    expect(found).not.toBeNull();
    expect(found?.getUsername()).toBe("john_doe");
  });

  it("findAll() returns all persisted users", async () => {
    const another = User.rehydrate("u2", new Date(), "jane_doe", "pw");
    await repo.save(another);

    const users = await repo.findAll();
    const usernames = users.map((u) => u.getUsername());

    expect(usernames).toContain("john_doe");
    expect(usernames).toContain("jane_doe");
  });

  it("save() creates a new user when not existing", async () => {
    const newUser = User.rehydrate("u3", new Date(), "mike", "pw");
    await repo.save(newUser);

    const persisted = await prisma.user.findUnique({
      where: { id: newUser.id },
    });

    expect(persisted).not.toBeNull();
    expect(persisted?.username).toBe("mike");
  });

  it("save() updates an existing user", async () => {
    const updated = User.rehydrate(user.id, user.createdAt, "john_doe", "new_pw");
    await repo.save(updated);

    const persisted = await prisma.user.findUnique({
      where: { id: user.id },
    });

    expect(persisted?.password).toBe("new_pw");
  });

  it("save() throws when username is not unique", async () => {
    const duplicate = User.rehydrate("u4", new Date(), "john_doe", "pw");

    await expect(repo.save(duplicate)).rejects.toThrow(
      /Username "john_doe" is taken/
    );
  });

  it("delete() removes the user by id", async () => {
    await repo.delete(user.id);
    const found = await prisma.user.findUnique({ where: { id: user.id } });

    expect(found).toBeNull();
  });

  it("delete() throws for missing users (P2025)", async () => {
    await expect(repo.delete("nonexistent")).rejects.toThrow(
      /User with id nonexistent not found/
    );
  });
});
