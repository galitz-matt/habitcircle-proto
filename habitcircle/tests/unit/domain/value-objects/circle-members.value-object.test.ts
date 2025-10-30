import { DomainError } from "@/lib/errors";
import { User } from "@/server/domain/entities/user.entity";
import { CircleMembers } from "@/server/domain/value-objects/circle-members.value-object";

const fixedDate = new Date("2024-01-01T00:00:00.000Z");

const createUser = (id: string, username = `user-${id}`): User =>
  User.rehydrate(id, fixedDate, username, `hash-${id}`);

describe("CircleMembers Value Object", () => {
  it("creates CircleMembers with owner included", () => {
    const owner = createUser("owner");
    const member = createUser("member");

    const circleMembers = CircleMembers.create(owner, [owner, member]);

    expect(circleMembers).toBeInstanceOf(CircleMembers);
    expect(circleMembers.getAll()).toEqual([owner, member]);
    expect(circleMembers.getAll()).toContain(owner);
  });

  it("throws when creating without owner", () => {
    const owner = createUser("owner");
    const other = createUser("other");

    expect(() => CircleMembers.create(owner, [other])).toThrow(DomainError);
  });

  it("adds a member immutably", () => {
    const owner = createUser("owner");
    const member = createUser("member");
    const newMember = createUser("new");
    const circleMembers = CircleMembers.create(owner, [owner, member]);

    const updated = circleMembers.add(newMember);

    expect(updated).not.toBe(circleMembers);
    expect(updated.getAll()).toEqual([owner, member, newMember]);
    expect(circleMembers.getAll()).toEqual([owner, member]);
  });

  it("throws when adding a duplicate member", () => {
    const owner = createUser("owner");
    const member = createUser("member");
    const circleMembers = CircleMembers.create(owner, [owner, member]);

    expect(() => circleMembers.add(member)).toThrow(DomainError);
  });

  it("removes a member immutably", () => {
    const owner = createUser("owner");
    const member = createUser("member");
    const circleMembers = CircleMembers.create(owner, [owner, member]);

    const updated = circleMembers.remove(member);

    expect(updated).not.toBe(circleMembers);
    expect(updated.getAll()).toEqual([owner]);
    expect(circleMembers.getAll()).toEqual([owner, member]);
  });

  it("throws when removing owner violates invariants", () => {
    const owner = createUser("owner");
    const circleMembers = CircleMembers.create(owner, [owner]);

    expect(() => circleMembers.remove(owner)).toThrow(DomainError);
  });

  it("checks membership by id", () => {
    const owner = createUser("owner");
    const member = createUser("member");
    const outsider = createUser("outsider");
    const circleMembers = CircleMembers.create(owner, [owner, member]);

    expect(circleMembers.includes(owner)).toBe(true);
    expect(circleMembers.includes(member)).toBe(true);
    expect(circleMembers.includes(outsider)).toBe(false);
  });

  it("updates owner when member exists", () => {
    const owner = createUser("owner");
    const newOwner = createUser("new-owner");
    const circleMembers = CircleMembers.create(owner, [owner, newOwner]);

    const updated = circleMembers.setOwner(newOwner);

    expect(updated).not.toBe(circleMembers);
    expect(updated.getAll()).toEqual([owner, newOwner]);
    expect(updated.includes(newOwner)).toBe(true);
  });

  it("throws when setting owner to existing owner", () => {
    const owner = createUser("owner");
    const circleMembers = CircleMembers.create(owner, [owner]);

    expect(() => circleMembers.setOwner(owner)).toThrow("User is already owner.");
  });

  it("throws when setting owner to a user outside the circle", () => {
    const owner = createUser("owner");
    const outsider = createUser("outsider");
    const circleMembers = CircleMembers.create(owner, [owner]);

    expect(() => circleMembers.setOwner(outsider)).toThrow("User is not in circle.");
  });

  it("compares equality by membership ids", () => {
    const owner = createUser("owner");
    const member = createUser("member");
    const anotherMember = createUser("another");

    const a = CircleMembers.create(owner, [owner, member, anotherMember]);
    const b = CircleMembers.create(owner, [owner, anotherMember, member]);
    const c = CircleMembers.create(owner, [owner, member]);

    expect(a.equals(b)).toBe(true);
    expect(a.equals(c)).toBe(false);
  });

  it("rehydrates without rechecking invariants", () => {
    const owner = createUser("owner");
    const member = createUser("member");

    const rehydrated = CircleMembers.rehydrate(owner, [owner, member]);

    expect(rehydrated.getAll()).toEqual([owner, member]);
  });

  it("produces a readable string of usernames", () => {
    const owner = createUser("owner", "alice");
    const member = createUser("member", "bob");
    const circleMembers = CircleMembers.create(owner, [owner, member]);

    expect(circleMembers.toString()).toBe("{ alice, bob }");
  });
});
