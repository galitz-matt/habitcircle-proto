import { InviteStatus } from "../generated"

export type CircleInvitePrismaDto = {
    scalars: {
        id: string;
        status: InviteStatus;
    }
    senderId: string;
    recipientId: string;
    circleId: string;
}