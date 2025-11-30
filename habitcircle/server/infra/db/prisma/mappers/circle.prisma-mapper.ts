import { Circle } from "@/server/domain/entities/circle.entity";
import type { Prisma } from "@/prisma/generated"
import { CirclePrismaDto } from "@/server/infra/db/prisma/dtos/circle-prisma.dto";
import { CircleName } from "@/server/domain/value-objects/circle-name.value-object";
import { CircleMembers } from "@/server/domain/value-objects/circle-members.value-object";
import { CircleHabits } from "@/server/domain/value-objects/circle-habits.value-object";
import { UserPrismaMapper } from "./user.prisma-mapper";
import { HabitPrismaMapper } from "./habit.prisma-mapper";

type CircleRecordWithRelations = Prisma.CircleGetPayload<{
    include: { owner: true; members: true; habits: true }
}>

export class CirclePrismaMapper {
    static toDomain(record: CircleRecordWithRelations): Circle {
        const owner = UserPrismaMapper.toDomain(record.owner);

        const members = record.members.map((m) =>
            UserPrismaMapper.toDomain(m)
        );

        const habits = record.habits.map((h) =>
            HabitPrismaMapper.toDomain(h)
        );

        return Circle.rehydrate(
            record.id,
            record.createdAt,
            CircleName.rehydrate(record.name),
            owner,
            CircleMembers.rehydrate(members),
            CircleHabits.rehydrate(habits)
        );
    }

    static toPersistence(circle: Circle): CirclePrismaDto {
        return {
            id: circle.id,
            name: circle.getName(),
            ownerId: circle.owner.id,
            createdAt: circle.createdAt,
            photoKey: circle.photoKey ?? null
        };
    }
}