import { Circle } from "@server/domain/entities/circle.entity";
import { User } from "@server/domain/entities/user.entity";
import { Habit } from "@server/domain/entities/habit.entity";
import type { Prisma, Circle as CircleRecord } from "@generated/prisma"

type CircleRecordWithRelations = Prisma.CircleGetPayload<{
    include: { owner: true; members: true; habits: true }
}>

export class CircleMapper {
    static toDomain(record: CircleRecordWithRelations): Circle {
        const owner = User.rehydrate(
            record.owner.id,
            record.owner.createdAt,
            record.owner.name,
            record.owner.password
        );

        const members = record.members.map((m) =>
            User.rehydrate(m.id, m.createdAt, m.name, m.password)
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

    static toPrisma(circle: Circle): Omit<CircleRecord, "ownerId"> {
        return {
            id: circle.id,
            name: circle.name,
            createdAt: circle.createdAt,
        };
    }
}