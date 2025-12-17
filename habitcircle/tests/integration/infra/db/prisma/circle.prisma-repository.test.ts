import { prisma } from "@/tests/integration/setup/jest.setup";
import { CirclePrismaRepository } from "@/server/infra/prisma/repositories/circle.prisma-repository";
import { Circle } from "@/server/domain/entities/circle/circle.entity";
import { CircleName } from "@/server/domain/value-objects/circle/circle-name.value-object";
import { CircleMember } from "@/server/domain/value-objects/circle/circle-member.value-object";
import { CircleMembers } from "@/server/domain/value-objects/circle/circle-members.value-object";
import { CircleHabits } from "@/server/domain/value-objects/circle/circle-habits.value-object";
import { Username } from "@/server/domain/value-objects/username.value-object";
import { User } from "@/server/domain/entities/user.entity";
import { DuplicateError, NotFoundError } from "@/lib/errors";

describe("CirclePrismaRepository (integration)", () => {
  let repo: CirclePrismaRepository;
  let owner: User;
  let ownerMember: CircleMember;
  let circle: Circle;

  beforeEach(async () => {
    repo = new CirclePrismaRepository(prisma);

    // ── Seed owner ─────────────────────────────────────────────
    const username = Username.create("test_owner");
    owner = User.create(username);

    await prisma.user.create({
      data: {
        id: owner.id,
        username: owner.username.toString(),
      },
    });

    // ── Build VO hierarchy ─────────────────────────────────────
    ownerMember = CircleMember.fromUser(owner);
    const members = CircleMembers.create([]); // ⬅️ owner NOT included
    const habits = CircleHabits.create([]);
    const circleName = CircleName.create("Focus Circle");

    // ── Domain entity ──────────────────────────────────────────
    circle = Circle.create(circleName, ownerMember, members, habits);

    // Persist in DB
    await repo.create(circle);
  });

  // ────────────────────────────────────────────────────────────
  // CREATE + FIND
  // ────────────────────────────────────────────────────────────

  it("create() persists a new circle with distinct owner (not a member)", async () => {
    const record = await prisma.circle.findUnique({
      where: { id: circle.id },
      include: { owner: true, members: true },
    });

    expect(record).not.toBeNull();
    expect(record?.name).toBe(circle.getName());
    expect(record?.ownerId).toBe(owner.id);
    expect(record?.members.length).toBe(0); 
  });

  it("findById() returns the correct circle", async () => {
    const found = await repo.findById(circle.id);
    expect(found).not.toBeNull();
    expect(found?.id).toBe(circle.id);
    expect(found?.getName()).toBe("Focus Circle");
    expect(found?.isOwnedBy(owner.id)).toBe(true);
    expect(found?.getMembers().length).toBe(0);
  });

  it("findByCircleName() returns all circles with that name", async () => {
    const anotherOwner = User.create(Username.create("another_owner"));
    await prisma.user.create({
      data: { id: anotherOwner.id, username: anotherOwner.username.toString() },
    });

    const another = Circle.create(
      CircleName.create("Focus Circle"),
      CircleMember.fromUser(anotherOwner),
      CircleMembers.create([]),
      CircleHabits.create([])
    );

    await repo.create(another);

    const results = await repo.findByCircleName(CircleName.create("Focus Circle"));
    expect(results.length).toBeGreaterThanOrEqual(2);
    expect(results.map(c => c.getName())).toContain("Focus Circle");
  });

  // ────────────────────────────────────────────────────────────
  // UPDATE
  // ────────────────────────────────────────────────────────────

  it("update() modifies circle name", async () => {
    const updated = Circle.rehydrate(
      circle.id,
      circle.createdAt,
      CircleName.create("Deep Work Circle"),
      ownerMember,
      CircleMembers.create([]),
      CircleHabits.create([])
    );

    await repo.update(updated);

    const record = await prisma.circle.findUnique({ where: { id: circle.id } });
    expect(record?.name).toBe("Deep Work Circle");
  });

  it("update() throws NotFoundError if circle missing", async () => {
    const missing = Circle.rehydrate(
      "missing_circle",
      new Date(),
      CircleName.create("Ghost Circle"),
      ownerMember,
      CircleMembers.create([]),
      CircleHabits.create([])
    );

    await expect(repo.update(missing)).rejects.toThrow(NotFoundError);
  });

  // ────────────────────────────────────────────────────────────
  // DUPLICATES
  // ────────────────────────────────────────────────────────────

  it("create() throws DuplicateError for duplicate id", async () => {
    const duplicate = Circle.rehydrate(
      circle.id,
      new Date(),
      CircleName.create("Duplicate Circle"),
      ownerMember,
      CircleMembers.create([]),
      CircleHabits.create([])
    );

    await expect(repo.create(duplicate)).rejects.toThrow(DuplicateError);
  });

  // ────────────────────────────────────────────────────────────
  // DELETE
  // ────────────────────────────────────────────────────────────

  it("delete() removes a circle", async () => {
    await repo.delete(circle.id);
    const found = await prisma.circle.findUnique({ where: { id: circle.id } });
    expect(found).toBeNull();
  });

  it("delete() throws NotFoundError if circle missing", async () => {
    await expect(repo.delete("missing_circle")).rejects.toThrow(NotFoundError);
  });
});
