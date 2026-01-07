import { prisma } from "@/tests/integration/setup/jest.setup";
import { CircleInvitePrismaRepository } from "@/server/infra/prisma/repositories/circle-invite.prisma-repository";
import { CircleInvite } from "@/server/domain/entities/circle/circle-invite.entity";
import { DomainInviteStatus } from "@/server/domain/types/invite-status";
import { InviteStatus } from "@/server/infra/prisma/generated";
import { DuplicateError, NotFoundError } from "@/server/lib/errors";
import { describe, it, beforeEach, expect } from "@jest/globals"

describe("CircleInvitePrismaRepository (integration)", () => {
  let repo: CircleInvitePrismaRepository;
  let invite: CircleInvite;

  beforeEach(async () => {
    repo = new CircleInvitePrismaRepository(prisma);

    // ── Seed dependencies ───────────────────────────────
    const [sender, recipient] = await prisma.$transaction([
      prisma.user.create({
        data: { id: "u_sender", username: "sender_user" },
      }),
      prisma.user.create({
        data: { id: "u_recipient", username: "recipient_user" },
      }),
    ]);

    const circle = await prisma.circle.create({
      data: {
        id: "c1",
        name: "Focus Circle",
        ownerId: sender.id,
        members: { connect: { id: sender.id } },
      },
    });

    // ── Domain entity ───────────────────────────────────
    invite = CircleInvite.rehydrate(
      "invite1",
      new Date(),
      sender.id,
      recipient.id,
      circle.id,
      DomainInviteStatus.PENDING
    );

    await repo.create(invite);
  });

  // ──────────────────────────────────────────────────────
  // CREATE + FIND
  // ──────────────────────────────────────────────────────

  it("create() persists a new CircleInvite", async () => {
    const record = await prisma.circleInvite.findUnique({
      where: { id: invite.id },
    });

    expect(record).not.toBeNull();
    expect(record?.senderId).toBe("u_sender");
    expect(record?.recipientId).toBe("u_recipient");
    expect(record?.circleId).toBe("c1");
    expect(record?.status).toBe(InviteStatus.PENDING);
  });

  it("findById() returns the correct invite", async () => {
    const found = await repo.findById(invite.id);
    expect(found).not.toBeNull();
    expect(found?.id).toBe(invite.id);
    expect(found?.status as DomainInviteStatus).toBe(InviteStatus.PENDING);
  });

  it("findByRecipientId() returns all invites for a recipient", async () => {
    const results = await repo.findByRecipientId("u_recipient");
    expect(results.length).toBe(1);
    expect(results[0].id).toBe(invite.id);
  });

  it("findBySenderId() returns all invites for a sender", async () => {
    const results = await repo.findBySenderId("u_sender");
    expect(results.length).toBe(1);
    expect(results[0].id).toBe(invite.id);
  });

  // ──────────────────────────────────────────────────────
  // UPDATE
  // ──────────────────────────────────────────────────────

  it("update() modifies invite status", async () => {
    const updated = CircleInvite.rehydrate(
      invite.id,
      invite.createdAt,
      invite.senderId,
      invite.recipientId,
      invite.circleId,
      DomainInviteStatus.ACCEPTED
    );

    await repo.update(updated);

    const record = await prisma.circleInvite.findUnique({
      where: { id: invite.id },
    });

    expect(record?.status).toBe(InviteStatus.ACCEPTED);
  });

  it("update() throws NotFoundError if invite missing", async () => {
    const missing = CircleInvite.rehydrate(
      "missing_invite",
      new Date(),
      "u_sender",
      "u_recipient",
      "c1",
      DomainInviteStatus.PENDING
    );

    await expect(repo.update(missing)).rejects.toThrow(NotFoundError);
  });

  // ──────────────────────────────────────────────────────
  // DUPLICATES
  // ──────────────────────────────────────────────────────

  it("create() throws DuplicateError for identical sender-recipient-circle", async () => {
    const duplicate = CircleInvite.rehydrate(
      "invite2",
      new Date(),
      "u_sender",
      "u_recipient",
      "c1",
      DomainInviteStatus.PENDING
    );

    await expect(repo.create(duplicate)).rejects.toThrow(DuplicateError);
  });

  // ──────────────────────────────────────────────────────
  // DELETION
  // ──────────────────────────────────────────────────────

  it("delete() removes an invite", async () => {
    await repo.delete(invite.id);
    const found = await prisma.circleInvite.findUnique({
      where: { id: invite.id },
    });
    expect(found).toBeNull();
  });

  it("delete() throws NotFoundError if invite does not exist", async () => {
    await expect(repo.delete("nonexistent")).rejects.toThrow(NotFoundError);
  });
});
