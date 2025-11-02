import { prisma } from "@/tests/integration/setup/jest.setup";
import { CirclePrismaRepository } from "@/server/infrastructure/db/repositories/circle.prisma-repository";
import { User } from "@/server/domain/entities/user.entity";
import { Circle } from "@/server/domain/entities/circle.entity";
import { Habit } from "@/server/domain/entities/habit.entity";

describe("CirclePrismaRepository (integration)", () => {
  let repo: CirclePrismaRepository;

  beforeEach(() => {
    repo = new CirclePrismaRepository(prisma);
  });

  async function seedBaseData() {
    const owner = User.rehydrate("u1", new Date(), "owner", "pw");
    const member = User.rehydrate("u2", new Date(), "member", "pw");

    await prisma.user.createMany({
      data: [
        { id: owner.id, username: owner.getUsername(), password: owner.getPasswordHash(), createdAt: owner.createdAt },
        { id: member.id, username: member.getUsername(), password: member.getPasswordHash(), createdAt: member.createdAt },
      ],
    });

    const circle = Circle.rehydrate(
      "c1",
      new Date(),
      "Focus Circle",
      owner,
      [owner, member],
      []
    );

    await prisma.circle.create({
      data: {
        id: circle.id,
        name: circle.name.get(),
        createdAt: circle.createdAt,
        owner: { connect: { id: owner.id } },
        members: { connect: [{ id: member.id }] },
      },
    });

    const habit = Habit.rehydrate("h1", new Date(), "Meditate", circle.id);
    await prisma.habit.create({
      data: {
        id: habit.id,
        createdAt: habit.createdAt,
        name: habit.getName(),
        circleId: circle.id,
      },
    });

    return { owner, member, circle, habit };
  }

  // ────────────────────────────────
  // TESTS
  // ────────────────────────────────

  it("save() persists a new circle", async () => {
    const owner = User.rehydrate("o1", new Date(), "alex", "pw");
    const member = User.rehydrate("m1", new Date(), "mike", "pw");

    await prisma.user.createMany({
      data: [
        { id: owner.id, username: owner.getUsername(), password: owner.getPasswordHash(), createdAt: owner.createdAt },
        { id: member.id, username: member.getUsername(), password: member.getPasswordHash(), createdAt: member.createdAt },
      ],
    });

    const circle = Circle.create("Focus Circle", owner, [owner, member]);
    await repo.save(circle);

    const found = await prisma.circle.findUnique({ where: { id: circle.id } });
    expect(found).not.toBeNull();
    expect(found!.name).toBe("Focus Circle");
  });

  it("findAll() returns all persisted circles", async () => {
    const { circle } = await seedBaseData();
    const circles = await repo.findAll();
    expect(circles).toHaveLength(1);
    expect(circles[0].id).toBe(circle.id);
  });

  it("findByName() returns circles matching the given name", async () => {
    const { circle } = await seedBaseData();
    const results = await repo.findByName("Focus Circle");
    expect(results).toHaveLength(1);
    expect(results[0].name.get()).toBe(circle.name.get());
  });

  it("findByUserId() returns all circles the user belongs to", async () => {
    const { member } = await seedBaseData();
    const circles = await repo.findByUserId(member.id);
    expect(circles).toHaveLength(1);
    expect(circles[0].members.getAll().some((u) => u.id === member.id)).toBe(true);
  });

  it("delete() removes a circle by id", async () => {
    const { circle } = await seedBaseData();
    await repo.delete(circle.id);
    const found = await prisma.circle.findUnique({ where: { id: circle.id } });
    expect(found).toBeNull();
  });
});
