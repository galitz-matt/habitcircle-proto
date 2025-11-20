import { InviteStatus } from "@/server/domain/types/invite-status"
import { Entity } from "./entity.abc"
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

export class CircleInvite extends Entity<CircleInviteProps> {

    private constructor(props: CircleInviteProps) { super(props) }

    static create(input: CreateCircleInviteInput): CircleInvite {
        const props: CircleInviteProps = {
            id: IdGenerator.new(),
            createdAt: new Date(),
            senderId: input.senderId,
            recipientId: input.recipientId,
            circleId: input.circleId,
            status: InviteStatus.PENDING
        }

        return new CircleInvite(props);
    }

    accept(): CircleInvite {
        return this.clone({ status: InviteStatus.ACCEPTED });
    }

    decline(): CircleInvite {
        return this.clone({ status: InviteStatus.DECLINED });
    }

    static rehydrate(props: CircleInviteProps): CircleInvite {
        return new CircleInvite(props);
    }

    protected create(props: CircleInviteProps): this {
        return new CircleInvite(props) as this;
    }
}