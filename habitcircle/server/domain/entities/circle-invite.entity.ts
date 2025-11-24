import { InviteStatus } from "@/server/domain/types/invite-status"
import { IdGenerator } from "@/lib/utils"

export type CircleInviteProps = {
    id: string,
    createdAt: Date,
    senderId: string,
    recipientId: string,
    circleId: string,
    status: InviteStatus
}

export type CreateCircleInviteInput = {
    senderId: string,
    recipientId: string,
    circleId: string
}

export class CircleInvite {

    private constructor(
        private readonly _id: string,
        private readonly _createdAt: Date,
        private readonly _senderId: string,
        private readonly _recipientId: string,
        private readonly _circleId: string,
        private status: InviteStatus
    ) {}

    static create(
        senderId: string,
        recipientId: string,
        circleId: string
    ): CircleInvite {
        return new CircleInvite(
            IdGenerator.new(),
            new Date(),
            senderId,
            recipientId,
            circleId,
            InviteStatus.PENDING
        );
    }

    accept(): this {
        this.status = InviteStatus.ACCEPTED;
        return this;
    }

    decline(): this {
        this.status = InviteStatus.DECLINED;
        return this;
    }

    static rehydrate(
        id: string,
        createdAt: Date,
        senderId: string,
        recipientId: string,
        circleId: string,
        status: InviteStatus
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