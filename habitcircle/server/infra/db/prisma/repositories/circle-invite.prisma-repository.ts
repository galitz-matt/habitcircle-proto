import { CircleInviteRepository } from "@/server/application/repositories/circle-invite.repository";
import { PrismaClient } from "@/prisma/generated";
import type { CircleInvite } from "@/server/domain/entities/circle/circle-invite.entity";
import { CircleInvitePrismaMapper } from "../mappers/circle-invite.prisma-mapper";
import { DuplicateError, NotFoundError } from "@/lib/errors";

export class CircleInvitePrismaRepository implements CircleInviteRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async findById(id: string): Promise<CircleInvite | null> {
        const circleInviteRecord = await this.prisma.circleInvite.findUnique({
            where: { id },
        });
        return circleInviteRecord ? CircleInvitePrismaMapper.toDomain(circleInviteRecord) : null;
    }

    async findByRecipientId(recipientId: string): Promise<CircleInvite[]> {
        const circleInviteRecords = await this.prisma.circleInvite.findMany({
            where: { recipientId },
        });
        return circleInviteRecords.map(CircleInvitePrismaMapper.toDomain);
    }

    async findBySenderId(senderId: string): Promise<CircleInvite[]> {
        const circleInviteRecords = await this.prisma.circleInvite.findMany({
            where: { senderId },
        });
        return circleInviteRecords.map(CircleInvitePrismaMapper.toDomain);
    }

    async create(circleInvite: CircleInvite): Promise<void> {
        const circleInviteDto = CircleInvitePrismaMapper.toPersistence(circleInvite);

        await this.prisma.circleInvite.create({
            data: circleInviteDto
        }).catch((err) => {
            if (err.code === "P2002") {
                throw new DuplicateError(
                    `CircleInvite already exists with recipientId ${circleInviteDto.recipientId} and senderId ${circleInviteDto.senderId}`
                );
            }
            throw err;
        });
    }
    
    async update(circleInvite: CircleInvite): Promise<void> {
        const circleInviteDto = CircleInvitePrismaMapper.toPersistence(circleInvite);

        await this.prisma.circleInvite.update({
            where: { id: circleInviteDto.id },
            data: {
                status: circleInviteDto.status,
                updatedAt: new Date(),
            },
        }).catch((err) => {
            if (err.code === "P2025")
                throw new NotFoundError(`CircleInvite with id ${circleInvite.id} not found`);
            throw err;
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.circleInvite.delete({
            where: { id }
        }).catch((err) => {
            if (err.code === "P2025")
                throw new NotFoundError(`CircleInvite with id ${id} not found`);
            throw err;
        });
    }
}