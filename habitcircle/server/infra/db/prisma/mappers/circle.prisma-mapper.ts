import { Circle } from "@/server/domain/entities/circle.entity";
import { User } from "@/server/domain/entities/user.entity";
import { Habit } from "@/server/domain/entities/habit.entity";
import type { Prisma } from "@/prisma/generated"
import { CirclePrismaDto } from "@/server/infra/db/prisma/dtos/circle-prisma.dto";
import { Username } from "@/server/domain/value-objects/username.value-object";
import { Biography } from "@/server/domain/value-objects/biography.value-object";
import { HabitName } from "@/server/domain/value-objects/habit-name.value-object";
import { CircleName } from "@/server/domain/value-objects/circle-name.value-object";
import { CircleMembers } from "@/server/domain/value-objects/circle-members.value-object";
import { CircleHabits } from "@/server/domain/value-objects/circle-habits.value-object";

type CircleRecordWithRelations = Prisma.CircleGetPayload<{
    include: { owner: true; members: true; habits: true }
}>

export class CirclePrismaMapper {
    static toDomain(record: CircleRecordWithRelations): Circle {
        const owner = User.rehydrate(
            record.owner.id,
            Username.rehydrate(record.owner.username),
            record.owner.emailAddress ?? undefined,
            record.owner.biography ? Biography.rehydrate(record.owner.biography) : undefined,
            record.owner.profilePictureKey ?? undefined
        );

        const members = record.members.map((m) =>
            User.rehydrate(
                m.id, 
                Username.rehydrate(m.username),
                m.emailAddress ?? undefined,
                m.biography ? Biography.rehydrate(m.biography) : undefined,
                m.profilePictureKey ?? undefined
            )
        );

        const habits = record.habits.map((h) =>
            Habit.rehydrate(
                h.id, 
                h.createdAt, 
                HabitName.rehydrate(h.name), 
                h.circleId
            )
        );

        return Circle.rehydrate(
            record.id,
            record.createdAt,
            CircleName.rehydrate(record.name),
            CircleMembers.rehydrate(owner, members),
            CircleHabits.rehydrate(habits)
        );
    }

    static toPersistence(circle: Circle): CirclePrismaDto {
        return {
            id: circle.id,
            name: circle.getName(),
            createdAt: circle.createdAt,
            photoKey: circle.photoKey ?? null
        };
    }
}