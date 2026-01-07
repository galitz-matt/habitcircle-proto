import { DomainError } from "@/server/lib/errors";
import { IdGenerator } from "@/server/lib/utils";
import { DomainFriendshipStatus } from "@/server/domain/types/friendship-status";

export class Friendship {

    private constructor(
        private readonly _id: string,
        private readonly _createdAt: Date,
        readonly requesterId: string,
        readonly addresseeId: string,
        private _status: DomainFriendshipStatus
    ) {}

    static create(requesterId: string, addresseeId: string): Friendship {
        if (requesterId === addresseeId)
            throw new DomainError("Cannot friend yourself");

        return new Friendship(
            IdGenerator.new(),
            new Date(),
            requesterId,
            addresseeId,
            DomainFriendshipStatus.PENDING
        );
    }

    accept(actorUserId: string): void {
        if (actorUserId !== this.addresseeId)
            throw new DomainError("Only addressee can accept friendship")
        if (this._status !== DomainFriendshipStatus.PENDING)
            throw new DomainError("Cannot accept non-pending friendship");

        this._status = DomainFriendshipStatus.ACCEPTED;
    }

    decline(actorUserId: string): void {
        if (actorUserId !== this.addresseeId)
            throw new DomainError("Only addressee can accept friendship");
        if (this._status !== DomainFriendshipStatus.PENDING)
            throw new DomainError("Cannot decline non-pending friendship");

        this._status = DomainFriendshipStatus.DECLINED;
    }

    get id(): string {
        return this._id
    }

    get createdAt(): Date {
        return new Date(this._createdAt);
    }

    get status(): DomainFriendshipStatus {
        return this._status;
    }

    // Used by persistence layer
    static rehydrate(
        id: string,
        createdAt: Date,
        requesterId: string,
        addresseeId: string,
        status: DomainFriendshipStatus
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