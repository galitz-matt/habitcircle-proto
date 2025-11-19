import { CircleInvite } from "@/server/domain/entities/circle-invite.entity";

export interface CircleInviteRepository {
    findById(id: string): Promise<CircleInvite | null>;
    findByUserId(userId: string): Promise<CircleInvite[]>;
    save(circleInvite: CircleInvite): Promise<void>;
    delete(id: string): Promise<void>;
}