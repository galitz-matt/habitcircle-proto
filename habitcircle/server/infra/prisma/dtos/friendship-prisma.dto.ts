import { FriendshipStatus } from "../generated"

export type FriendshipPrismaDto = {
    scalars: {
        id: string;
        status: FriendshipStatus;
    }
    requesterId: string;
    addresseeId: string;
}