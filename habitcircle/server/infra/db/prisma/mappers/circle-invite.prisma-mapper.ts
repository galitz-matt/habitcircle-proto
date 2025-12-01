import { CircleInvite } from "@/server/domain/entities/circle/circle-invite.entity";
import { CircleInvite as CircleInviteRecord, InviteStatus } from "../generated";
import { DomainInviteStatus } from "@/server/domain/types/invite-status";
import { CircleInvitePrismaDto } from "../dtos/circle-invite-prisma.dto";

export class CircleInvitePrismaMapper {
    static toDomain(record: CircleInviteRecord): CircleInvite {
        return CircleInvite.rehydrate(
            record.id,
            record.createdAt,
            record.senderId,
            record.recipientId,
            record.circleId,
            CircleInvitePrismaMapper.toDomainStatus(record.status)
        );
    }

    static toPersistence(circleInvite: CircleInvite): CircleInvitePrismaDto {
        return {
            id: circleInvite.id,
            createdAt: circleInvite.createdAt,
            senderId: circleInvite.senderId,
            recipientId: circleInvite.recipientId,
            circleId: circleInvite.circleId,
            status: CircleInvitePrismaMapper.toPersistenceStatus(circleInvite.status)
        };
    }

    private static toDomainStatus(status: InviteStatus): DomainInviteStatus {
        switch (status) {
            case InviteStatus.ACCEPTED: return DomainInviteStatus.ACCEPTED
            case InviteStatus.DECLINED: return DomainInviteStatus.DECLINED
            default: return DomainInviteStatus.PENDING
        };
    }

    private static toPersistenceStatus(status: DomainInviteStatus): InviteStatus {
        switch (status) {
            case DomainInviteStatus.ACCEPTED: return InviteStatus.ACCEPTED
            case DomainInviteStatus.DECLINED: return InviteStatus.DECLINED
            default: return InviteStatus.PENDING
        };
    }
}