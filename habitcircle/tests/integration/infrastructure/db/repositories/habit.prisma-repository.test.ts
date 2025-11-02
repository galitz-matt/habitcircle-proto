import { prisma } from "@/tests/integration/setup/jest.setup";
import { HabitPrismaRepository } from "@/server/infrastructure/db/repositories/habit.prisma-repository";
import { Habit } from "@/server/domain/entities/habit.entity";
import { Circle } from "@/server/domain/entities/circle.entity";
import { User } from "@/server/domain/entities/user.entity";

describe("HabitPrismaRepository (integration)", () => {
  let repo: HabitPrismaRepository;
  let user: User;
  let circle: Circle;
  let habit: Habit;

  beforeEach(async () => {
    repo = new HabitPrismaRepository(prisma);

    // Seed user
    user = User.rehydrate("u1", new Date(), "test_user", "hashed_pw");
    await prisma.user.create({
      data: {
        id: user.id,
        username: user.getUsername(),
        password: user.getPasswordHash(),
      },
    });

    // Seed circle
    circle = Circle.rehydrate(
      "c1",
      new Date(),
      "Focus Circle",
      user,
      [user],
      []
    );
    await prisma.circle.create({
      data: {
        id: circle.id,
        name: circle.name.get(),
        ownerId: user.id,
        members: { connect: { id: user.id } },
      },
    });

    // Seed habit
    habit = Habit.rehydrate("h1", new Date(), "Read 20 pages", circle.id);
    await repo.save(habit);
  });

  it("save() persists a new habit", async () => {
    const found = await prisma.habit.findUnique({
      where: { id: habit.id },
    });

    expect(found).not.toBeNull();
    expect(found?.name).toBe(habit.getName());
    expect(found?.circleId).toBe(circle.id);
  });

  it("findById() returns the correct habit", async () => {
    const found = await repo.findById(habit.id);
    expect(found).not.toBeNull();
    expect(found?.id).toBe(habit.id);
    expect(found?.getName()).toBe("Read 20 pages");
  });

  it("findByCircleId() returns all habits for the given circle", async () => {
    const another = Habit.rehydrate("h2", new Date(), "Workout", circle.id);
    await repo.save(another);

    const results = await repo.findByCircleId(circle.id);
    expect(results.length).toBe(2);
    const habitNames = results.map(h => h.getName());
    expect(habitNames).toContain("Read 20 pages");
    expect(habitNames).toContain("Workout");
  });

  it("findAll() returns all persisted habits", async () => {
    const results = await repo.findAll();
    expect(results.length).toBeGreaterThan(0);
    expect(results.some(h => h.id === habit.id)).toBe(true);
  });

  it("delete() removes the habit by id", async () => {
    await repo.delete(habit.id);
    const found = await prisma.habit.findUnique({
      where: { id: habit.id },
    });
    expect(found).toBeNull();
  });

  it("delete() silently ignores missing habits (P2025)", async () => {
    await expect(repo.delete("nonexistent")).resolves.not.toThrow();
  });
});
