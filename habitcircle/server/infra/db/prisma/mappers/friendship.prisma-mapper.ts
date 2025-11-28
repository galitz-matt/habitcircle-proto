import { Friendship } from "@/server/domain/entities/friendship.entity";
import { Friendship as FriendshipRecord, FriendshipStatus } from "../generated";
import { DomainFriendshipStatus } from "@/server/domain/types/friendship-status";
import { FriendshipPrismaDto } from "../dtos/friendship-prisma.dto";

export class FriendshipPrismaMapper {
    toDomain(record: FriendshipRecord): Friendship {
        return Friendship.rehydrate(
            record.id,
            record.createdAt,
            record.requesterId,
            record.addresseeId,
            FriendshipPrismaMapper.toDomainStatus(record.status)
        )
    }

    toPersistence(friendship: Friendship): FriendshipPrismaDto {
        return {
            id: friendship.id,
            createdAt: friendship.createdAt,
            requesterId: friendship.requesterId,
            addresseeId: friendship.addresseeId,
            status: FriendshipPrismaMapper.toPersistenceStatus(friendship.status)
        }
    }

    private static toDomainStatus(status: FriendshipStatus): DomainFriendshipStatus {
        switch (status) {
            case FriendshipStatus.ACCEPTED: return DomainFriendshipStatus.ACCEPTED
            case FriendshipStatus.DECLINED: return DomainFriendshipStatus.DECLINED
            default: return DomainFriendshipStatus.PENDING
        }
    }

    private static toPersistenceStatus(status: DomainFriendshipStatus): FriendshipStatus {
        switch (status) {
            case DomainFriendshipStatus.ACCEPTED: return FriendshipStatus.ACCEPTED
            case DomainFriendshipStatus.DECLINED: return FriendshipStatus.DECLINED
            default: return FriendshipStatus.PENDING
        }
    }
}