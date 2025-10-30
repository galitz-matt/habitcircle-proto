import { DomainError } from "@/lib/errors";
import { Circle } from "@/server/domain/entities/circle.entity";
import { Habit } from "@/server/domain/entities/habit.entity";
import { User } from "@/server/domain/entities/user.entity";

const fixedDate = new Date("2024-01-01T00:00:00.000Z");

const createUser = (id: string, username = `user-${id}`): User => {
  return User.rehydrate(id, fixedDate, username, `hash-${id}`);
};

const createHabit = (
  id: string,
  circleId = "circle-ref",
  name = `habit-${id}`,
): Habit => {
  return Habit.rehydrate(id, fixedDate, name, circleId);
};

describe("Circle Entity", () => {
  it("creates a circle with normalized name, owner, and initial members", () => {
    const owner = createUser("owner");
    const member = createUser("member");
    const habit = createHabit("habit-1");

    const circle = Circle.create("  MorningCrew  ", owner, [owner, member], [
      habit,
    ]);

    expect(circle).toBeInstanceOf(Circle);
    expect(typeof circle.id).toBe("string");
    expect(circle.createdAt).toBeInstanceOf(Date);
    expect(circle.getOwner()).toBe(owner);
    expect(circle.name.get()).toBe("MorningCrew");
    expect(circle.members.includes(owner)).toBe(true);
    expect(circle.members.includes(member)).toBe(true);
    expect(circle.habits.getAll()).toEqual([habit]);
  });

  it("updates the owner immutably when setting a new owner", () => {
    const owner = createUser("owner");
    const member = createUser("member");
    const newOwner = createUser("new-owner");
    const circle = Circle.create("Circle", owner, [owner, member, newOwner]);

    const updatedCircle = circle.setOwner(newOwner);

    expect(updatedCircle).not.toBe(circle);
    expect(updatedCircle.getOwner()).toBe(newOwner);
    expect(circle.getOwner()).toBe(owner);
  });

  it("adds a member immutably", () => {
    const owner = createUser("owner");
    const member = createUser("member");
    const newMember = createUser("new-member");
    const circle = Circle.create("Circle", owner, [owner, member]);

    const updatedCircle = circle.addMember(newMember);

    expect(updatedCircle).not.toBe(circle);
    expect(updatedCircle.members.includes(newMember)).toBe(true);
    expect(circle.members.includes(newMember)).toBe(false);
  });

  it("removes a non-owner member immutably", () => {
    const owner = createUser("owner");
    const memberToKeep = createUser("keep");
    const memberToRemove = createUser("remove");
    const circle = Circle.create("Circle", owner, [
      owner,
      memberToKeep,
      memberToRemove,
    ]);

    const updatedCircle = circle.removeMember(memberToRemove);

    expect(updatedCircle).not.toBe(circle);
    expect(updatedCircle.members.includes(memberToRemove)).toBe(false);
    expect(updatedCircle.members.includes(memberToKeep)).toBe(true);
    expect(circle.members.includes(memberToRemove)).toBe(true);
  });

  it("throws when attempting to remove the owner", () => {
    const owner = createUser("owner");
    const member = createUser("member");
    const circle = Circle.create("Circle", owner, [owner, member]);

    expect(() => circle.removeMember(owner)).toThrow(DomainError);
  });

  it("adds a habit immutably", () => {
    const owner = createUser("owner");
    const circle = Circle.create("Circle", owner, [owner]);
    const habit = createHabit("habit-1");

    const updatedCircle = circle.addHabit(habit);

    expect(updatedCircle).not.toBe(circle);
    expect(updatedCircle.habits.getAll()).toEqual([habit]);
    expect(circle.habits.getAll()).toEqual([]);
  });

  it("throws when adding a duplicate habit", () => {
    const owner = createUser("owner");
    const circle = Circle.create("Circle", owner, [owner]);
    const habit = createHabit("habit-1");
    const circleWithHabit = circle.addHabit(habit);

    expect(() => circleWithHabit.addHabit(habit)).toThrow(DomainError);
  });

  it("rehydrates a circle with the persisted state", () => {
    const owner = createUser("owner");
    const member = createUser("member");
    const habit = createHabit("habit-1", "circle-id");
    const createdAt = new Date("2023-06-15T12:00:00.000Z");

    const circle = Circle.rehydrate(
      "circle-id",
      createdAt,
      "Persisted Circle",
      owner,
      [owner, member],
      [habit],
    );

    expect(circle.id).toBe("circle-id");
    expect(circle.createdAt).toBe(createdAt);
    expect(circle.name.get()).toBe("Persisted Circle");
    expect(circle.getOwner()).toBe(owner);
    expect(circle.members.includes(member)).toBe(true);
    expect(circle.habits.getAll()).toEqual([habit]);
  });
});
