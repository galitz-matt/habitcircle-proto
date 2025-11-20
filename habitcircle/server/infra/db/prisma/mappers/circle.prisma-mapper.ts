import { Circle } from "@/server/domain/entities/circle.entity";
import { User } from "@/server/domain/entities/user.entity";
import { Habit } from "@/server/domain/entities/habit.entity";
import type { Prisma } from "@/prisma/generated"
import { CirclePrimitive } from "@/server/infra/db/dtos/circle-primitive.dto";

type CircleRecordWithRelations = Prisma.CircleGetPayload<{
    include: { owner: true; members: true; habits: true }
}>

export class CirclePrismaMapper {
    static toDomain(record: CircleRecordWithRelations): Circle {
        const owner = User.rehydrate(
            record.owner.id,
            record.owner.createdAt,
            record.owner.username,
            record.owner.emailAddress ?? undefined,
            record.owner.biography ?? undefined,
            record.owner.profilePictureKey ?? undefined
        );

        const members = record.members.map((m) =>
            User.rehydrate(
                m.id, 
                m.createdAt, 
                m.username,
                m.emailAddress ?? undefined,
                m.biography ?? undefined,
                m.profilePictureKey ?? undefined
            )
        );

        const habits = record.habits.map((h) =>
            Habit.rehydrate(h.id, h.createdAt, h.name, h.circleId)
        );

        return Circle.rehydrate(
            record.id,
            record.createdAt,
            record.name,
            owner,
            members,
            habits
        );
    }

    static toPersistence(circle: Circle): CirclePrimitive {
        return {
            id: circle.id,
            name: circle.name.get(),
            createdAt: circle.createdAt,
            photoKey: circle.photoKey ?? null
        };
    }
}