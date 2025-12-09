import { Circle } from "@/server/domain/entities/circle/circle.entity";
import type { Habit as HabitRecord, Prisma } from "@/prisma/generated"
import { CirclePrismaDto } from "@/server/infra/db/prisma/dtos/circle-prisma.dto";
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

    static toPersistence(circle: Circle): CirclePrismaDto {
        return {
            scalars: {
                id: circle.id,
                name: circle.getName(),
                photoKey: circle.photoKey,
            },
            relations: {
                ownerId: circle.owner.userId,
                memberIds: circle.getMembers().map(m => m.userId),
                habits: circle.getHabits().map(HabitPrismaMapper.toPersistence)
            }
        }
    }
}