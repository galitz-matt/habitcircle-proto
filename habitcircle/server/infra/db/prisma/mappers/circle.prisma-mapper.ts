import { Circle } from "@/server/domain/entities/circle/circle.entity";
import type { Habit as HabitRecord, Prisma } from "@/prisma/generated"
import { CircleCreatePrismaDto, CircleUpdatePrismaDto } from "@/server/infra/db/prisma/dtos/circle-prisma.dto";
import { CircleName } from "@/server/domain/value-objects/circle/circle-name.value-object";
import { CircleMembers } from "@/server/domain/value-objects/circle/circle-members.value-object";
import { CircleHabits } from "@/server/domain/value-objects/circle/circle-habits.value-object";
import { UserPrismaMapper } from "./user.prisma-mapper";
import { HabitPrismaMapper } from "./habit.prisma-mapper";

type CircleRecordWithRelations = Prisma.CircleGetPayload<{
    include: { owner: true; members: true; habits: true }
}>

export class CirclePrismaMapper {
    static toDomain(record: CircleRecordWithRelations): Circle {
        const owner = UserPrismaMapper.toCircleMember(record.owner);

        const members = record.members.map((m) =>
            UserPrismaMapper.toCircleMember(m)
        );

        const habits = record.habits.map((h) =>
            HabitPrismaMapper.toDomain(h)
        );

        return Circle.rehydrate(
            record.id,
            record.createdAt,
            CircleName.rehydrate(record.name),
            owner,
            CircleMembers.rehydrateFromCircleMembers(members),
            CircleHabits.rehydrate(habits)
        );
    }

    static toPersistenceForCreate(circle: Circle): CircleCreatePrismaDto {
        return {
            scalars: {
                id: circle.id,
                name: circle.getName(),
                photoKey: circle.photoKey ?? null
            },
            ownerId: circle.owner.userId,
            memberIds: circle.getMembers().map(m => ({ id: m.userId })),
            habitsToCreate: circle.getHabits().map(HabitPrismaMapper.toPersistence)
        };
    }

    static toPersistenceForUpdate(
        circle: Circle,
        existingHabits: HabitRecord[]
    ): CircleUpdatePrismaDto {
        const incoming = circle.getHabits().map(HabitPrismaMapper.toPersistence);

        const deleteIds = existingHabits
            .filter(e => !incoming.some(i => i.id === e.id))
            .map(h => h.id)

        return {
            scalars: {
                id: circle.id,
                name: circle.getName(),
                photoKey: circle.photoKey ?? null,
            },
            ownerId: circle.owner.userId,
            memberIds: circle.getMembers().map(m => ({ id: m.userId })),
            habitsToUpsert: incoming.map(h => ({
                where: { id: h.id },
                create: h,
                update: {
                    name: h.name,
                }
            })),
            habitIdsToDelete: { id: { in: deleteIds }}
        };
    }
}