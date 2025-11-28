import { InviteStatus } from "../generated"

export type CircleInvitePrismaDto = {
    id: string,
    createdAt: Date,
    senderId: string,
    recipientId: string,
    circleId: string,
    status: InviteStatus
}