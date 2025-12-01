import { Friendship } from "@/server/domain/entities/friendship.entity";

export interface FriendshipRepository {
    findById(id: string): Promise<Friendship | null>;
    findByRequesterId(requesterId: string): Promise<Friendship[]>;
    findByAddresseeId(addresseeId: string): Promise<Friendship[]>;
    create(friendship: Friendship): Promise<void>;
    update(friendship: Friendship): Promise<void>;
    delete(friendship: Friendship): Promise<void>
}