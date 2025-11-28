import { DomainInviteStatus } from "@/server/domain/types/invite-status"
import { IdGenerator } from "@/lib/utils"
import { DomainError } from "@/lib/errors";

export class CircleInvite {

    private constructor(
        private readonly _id: string,
        private readonly _createdAt: Date,
        private readonly _senderId: string,
        private readonly _recipientId: string,
        private readonly _circleId: string,
        private _status: DomainInviteStatus
    ) {}

    static create(
        senderId: string,
        recipientId: string,
        circleId: string
    ): CircleInvite {
        if (senderId === recipientId)
            throw new DomainError("Sender cannot be same as recipient");

        return new CircleInvite(
            IdGenerator.new(),
            new Date(),
            senderId,
            recipientId,
            circleId,
            DomainInviteStatus.PENDING
        );
    }

    accept(): void {
        if (this._status !== DomainInviteStatus.PENDING)
            throw new DomainError("Cannot accept nonpending circle invite");

        this._status = DomainInviteStatus.ACCEPTED;
    }

    decline(): void {
        if (this._status !== DomainInviteStatus.PENDING) 
            throw new DomainError("Cannot decline nonpending invite");

        this._status = DomainInviteStatus.DECLINED;
    }

    static rehydrate(
        id: string,
        createdAt: Date,
        senderId: string,
        recipientId: string,
        circleId: string,
        status: DomainInviteStatus
    ): CircleInvite {
        return new CircleInvite(
            id,
            createdAt,
            senderId,
            recipientId,
            circleId,
            status
        );
    }
}