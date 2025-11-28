import { FriendshipStatus } from "../generated"

export type FriendshipPersistenceDto = {
    id: string,
    createdAt: Date,
    requesterId: string,
    addresseeId: string,
    status: FriendshipStatus
}