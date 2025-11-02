import { prisma } from "@/tests/integration/setup/jest.setup";
import { Completion } from "@/server/domain/entities/completion.entity";
import { CompletionPrismaRepository } from "@/server/infrastructure/db/repositories/completion.prisma-repository";
import { Habit } from "@/server/domain/entities/habit.entity";
import { User } from "@/server/domain/entities/user.entity";
import { Circle } from "@/server/domain/entities/circle.entity";

describe("CompletionPrismaRepository (integration)", () => {
  let repo: CompletionPrismaRepository;
  let user: User;
  let circle: Circle;
  let habit: Habit;
  let completion: Completion;

  beforeEach(async () => {
    repo = new CompletionPrismaRepository(prisma);

    user = User.rehydrate("u1", new Date(), "test_user", "password");
    await prisma.user.create({
      data: {
        id: user.id,
        username: user.getUsername(),
        password: user.getPasswordHash(),
      },
    });

    circle = Circle.rehydrate(
      "c1",
      new Date(),
      "Wellness Circle",
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

    habit = Habit.rehydrate("h1", new Date(), "Meditate", circle.id);
    await prisma.habit.create({
      data: {
        id: habit.id,
        name: habit.getName(),
        circleId: circle.id,
      },
    });

    completion = Completion.create(user.id, habit.id);
    await repo.save(completion);
  });

  it("save() persists a new completion", async () => {
    const found = await prisma.completion.findUnique({
      where: {
        userId_habitId_completedAt: {
          userId: completion.userId,
          habitId: completion.habitId,
          completedAt: completion.completedAt,
        },
      },
    });

    expect(found).not.toBeNull();
    expect(found?.userId).toBe(completion.userId);
    expect(found?.habitId).toBe(completion.habitId);
  });

  it("findByUserHabitAndDate() returns the correct completion", async () => {
    const found = await repo.findByUserHabitAndDate(
      user.id,
      habit.id,
      completion.completedAt
    );

    expect(found).not.toBeNull();
    expect(found?.userId).toBe(user.id);
    expect(found?.habitId).toBe(habit.id);
  });

  it("findByUserAndHabit() returns all completions for a given habit", async () => {
    const nextDay = new Date(completion.completedAt);
    nextDay.setDate(nextDay.getDate() + 1);
    const completion2 = Completion.rehydrate(
      "c2",
      new Date(),
      nextDay,
      user.id,
      habit.id
    );
    await repo.save(completion2);

    const found = await repo.findByUserAndHabit(user.id, habit.id);
    expect(found.length).toBe(2);
    expect(found.map(c => c.habitId)).toContain(habit.id);
  });

  it("findByUserId() returns all completions by user", async () => {
    const results = await repo.findByUserId(user.id);
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].userId).toBe(user.id);
  });

  it("findByHabitId() returns all completions for a habit", async () => {
    const results = await repo.findByHabitId(habit.id);
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].habitId).toBe(habit.id);
  });

  it("findAll() returns all completions", async () => {
    const results = await repo.findAll();
    expect(results.length).toBeGreaterThan(0);
  });

  it("delete() removes a completion by id", async () => {
    await repo.delete(completion.id);
    const found = await prisma.completion.findUnique({
      where: { id: completion.id },
    });
    expect(found).toBeNull();
  });
});
