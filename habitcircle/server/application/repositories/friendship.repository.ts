import { Friendship } from "@/server/domain/entities/friendship.entity";

export interface FriendshipRepository {
    findById(id: string): Promise<Friendship | null>;
    findByRequesterId(userId: string): Promise<Friendship[]>;
    save(friendship: Friendship): Promise<void>
    delete(id: string): Promise<void>
}