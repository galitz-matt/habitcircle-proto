import { FriendshipStatus } from "../generated"

export type FriendshipPrismaDto = {
    id: string,
    createdAt: Date,
    requesterId: string,
    addresseeId: string,
    status: FriendshipStatus
}