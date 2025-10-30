import { DomainError } from "@/lib/errors";
import { User } from "@/server/domain/entities/user.entity";
import { CircleMembersInvariants } from "@/server/domain/invariants/circle-members.invariant";

const fixedDate = new Date("2024-01-01T00:00:00.000Z");

const createUser = (id: string, username = `user-${id}`): User => {
  return User.rehydrate(id, fixedDate, username, `hash-${id}`);
};

describe("CircleMembersInvariants", () => {
  it("allows owner included in members without duplicates", () => {
    const owner = createUser("owner");
    const memberA = createUser("member-a");
    const memberB = createUser("member-b");

    expect(() =>
      CircleMembersInvariants.enforce(owner, [owner, memberA, memberB]),
    ).not.toThrow();
  });

  it("throws when owner is missing from members", () => {
    const owner = createUser("owner");
    const member = createUser("member");

    expect(() =>
      CircleMembersInvariants.enforce(owner, [member]),
    ).toThrow(DomainError);
  });

  it("throws when duplicate member ids are present", () => {
    const owner = createUser("owner");
    const member = createUser("member");
    const duplicateById = User.rehydrate(
      member["id"],
      fixedDate,
      member.getUsername(),
      member.getPasswordHash(),
    );

    expect(() =>
      CircleMembersInvariants.enforce(owner, [
        owner,
        member,
        duplicateById,
      ]),
    ).toThrow(DomainError);
  });

  it("throws when owner reference is not the same instance in members", () => {
    const owner = createUser("owner");
    const ownerClone = User.rehydrate(
      owner["id"],
      fixedDate,
      owner.getUsername(),
      owner.getPasswordHash(),
    );

    expect(() =>
      CircleMembersInvariants.enforce(owner, [ownerClone]),
    ).toThrow(DomainError);
  });
});
