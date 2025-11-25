import { DomainError } from "@/lib/errors";
import { IdGenerator } from "@/lib/utils";
import { FriendshipStatus } from "@/server/domain/types/friendship-status";

export class Friendship {

    private constructor(
        private readonly _id: string,
        private readonly _createdAt: Date,
        readonly requesterId: string,
        readonly addresseeId: string,
        private _status: FriendshipStatus
    ) {}

    static create(requesterId: string, addresseeId: string): Friendship {
        if (requesterId === addresseeId)
            throw new DomainError("Cannot friend yourself");

        return new Friendship(
            IdGenerator.new(),
            new Date(),
            requesterId,
            addresseeId,
            FriendshipStatus.PENDING
        );
    }

    accept(actorUserId: string): void {
        if (actorUserId !== this.addresseeId)
            throw new DomainError("Only addressee can accept friendship")
        if (this._status !== FriendshipStatus.PENDING)
            throw new DomainError("Cannot accept non-pending friendship");

        this._status = FriendshipStatus.ACCEPTED;
    }

    decline(actorUserId: string): void {
        if (actorUserId !== this.addresseeId)
            throw new DomainError("Only addressee can accept friendship");
        if (this._status !== FriendshipStatus.PENDING)
            throw new DomainError("Cannot decline non-pending friendship");

        this._status = FriendshipStatus.DECLINED;
    }

    // Used by persistence layer
    static rehydrate(
        id: string,
        createdAt: Date,
        requesterId: string,
        addresseeId: string,
        status: FriendshipStatus
    ): Friendship {
        return new Friendship(
            id,
            new Date(createdAt.getTime()),
            requesterId,
            addresseeId,
            status
        );
    }
}