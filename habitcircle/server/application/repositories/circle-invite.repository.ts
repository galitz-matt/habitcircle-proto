import { CircleInvite } from "@/server/domain/entities/circle-invite.entity";

export interface CircleInviteRepository {
    findById(id: string): Promise<CircleInvite | null>;
    findByRecipientId(userId: string): Promise<CircleInvite[]>;
    findBySenderId(userId: string): Promise<CircleInvite[]>;
    create(circleInvite: CircleInvite): Promise<void>;
    update(circleInvite: CircleInvite): Promise<void>;
    delete(circleInvite: CircleInvite): Promise<void>;
}