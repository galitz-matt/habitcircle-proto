import { CircleInvite } from "@/server/domain/entities/circle/circle-invite.entity";

export interface CircleInviteRepository {
    findById(id: string): Promise<CircleInvite | null>;
    findByRecipientId(recipientId: string): Promise<CircleInvite[]>;
    findBySenderId(senderId: string): Promise<CircleInvite[]>;
    create(circleInvite: CircleInvite): Promise<void>;
    update(circleInvite: CircleInvite): Promise<void>;
    delete(circleInvite: CircleInvite): Promise<void>;
}