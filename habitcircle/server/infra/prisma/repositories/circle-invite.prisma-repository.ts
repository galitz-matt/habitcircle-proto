import { CircleInviteRepository } from "@/server/application/repositories/circle-invite.repository";
import { PrismaClient } from "@/prisma/generated";
import type { CircleInvite } from "@/server/domain/entities/circle/circle-invite.entity";
import { CircleInvitePrismaMapper } from "../mappers/circle-invite.prisma-mapper";
import { DuplicateError, NotFoundError } from "@/server/lib/errors";
import { inject, injectable } from "tsyringe";

@injectable()
export class CircleInvitePrismaRepository implements CircleInviteRepository {
    constructor(
        @inject(PrismaClient)
        private readonly prisma: PrismaClient
    ) {}

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
        const dto = CircleInvitePrismaMapper.toPersistence(circleInvite);
        await this.prisma.circleInvite.create({
            data: {
                ...dto.scalars,
                sender: { connect: { id: dto.senderId } },
                recipient: { connect: { id: dto.recipientId } },
                circle: { connect: { id: dto.circleId } }
            }
        }).catch((err) => {
            if (err.code === "P2002") {
                throw new DuplicateError(
                    `CircleInvite already exists with recipientId ${dto.recipientId} and senderId ${dto.senderId}`
                );
            }
            throw err;
        });
    }
    
    async update(circleInvite: CircleInvite): Promise<void> {
        const circleInviteDto = CircleInvitePrismaMapper.toPersistence(circleInvite);

        await this.prisma.circleInvite.update({
            where: { id: circleInviteDto.scalars.id },
            data: {
                status: circleInviteDto.scalars.status,
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