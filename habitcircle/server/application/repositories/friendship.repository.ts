import { Friendship } from "@/server/domain/entities/friendship.entity";

export interface FriendshipRepository {
    findById(id: string): Promise<Friendship | null>;
    findByRequesterId(userId: string): Promise<Friendship[]>;
    findByAddresseeId(userId: string): Promise<Friendship[]>;
    create(friendship: Friendship): Promise<void>;
    update(friendship: Friendship): Promise<void>;
    delete(friendship: Friendship): Promise<void>
}