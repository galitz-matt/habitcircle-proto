import { FriendshipRepository } from "@/server/application/repositories/friendship.repository";
import { PrismaClient } from "../generated";
import { Friendship } from "@/server/domain/entities/friendship.entity";
import { FriendshipPrismaMapper } from "../mappers/friendship.prisma-mapper";
import { DuplicateError, NotFoundError } from "@/lib/errors";

export class FriendshipPrismaRepository implements FriendshipRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async findById(id: string): Promise<Friendship | null> {
        const friendshipRecord = await this.prisma.friendship.findUnique({
            where: { id }
        });
        return friendshipRecord ? FriendshipPrismaMapper.toDomain(friendshipRecord) : null;
    }

    async findByRequesterId(requesterId: string): Promise<Friendship[]> {
        const friendshipRecords = await this.prisma.friendship.findMany({
            where: { requesterId }
        });
        return friendshipRecords.map(FriendshipPrismaMapper.toDomain);
    }

    async findByAddresseeId(addresseeId: string): Promise<Friendship[]> {
        const friendshipRecords = await this.prisma.friendship.findMany({
            where: { addresseeId }
        });
        return friendshipRecords.map(FriendshipPrismaMapper.toDomain);
    }

    async create(friendship: Friendship): Promise<void> {
        const dto = FriendshipPrismaMapper.toPersistence(friendship);
        await this.prisma.friendship.create({
            data: {
                ...dto.scalars,
                requester: { connect: { id: dto.requesterId } },
                addressee: { connect: { id: dto.addresseeId } }
            },
        }).catch((err) => {
            if (err.code === "P2002") {
                const target = err.meta?.target?.[0];
                throw new DuplicateError(`Friendship already exists with duplicate ${target}`);
            }
            throw err;
        })
    }

    async update(friendship: Friendship): Promise<void> {
        const dto = FriendshipPrismaMapper.toPersistence(friendship);

        await this.prisma.friendship.update({
            where: { id: dto.scalars.id },
            data: {
                status: dto.scalars.status
            },
        }).catch((err) => {
            if (err.code === "P2025")
                throw new NotFoundError(`Friendship with id ${dto.scalars.id} not found`);
            throw err;
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.friendship.delete({
            where: { id }
        }).catch((err) => {
            if (err.code === "P2025")
                throw new NotFoundError(`Friendship with id ${id} not found`);
            throw err;
        })
    }
}