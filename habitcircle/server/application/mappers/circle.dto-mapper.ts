import { Circle } from "@/server/domain/entities/circle/circle.entity";
import { CircleDto } from "@/server/application/dtos/circle.dto";

export class CircleDtoMapper {
    static toDto(circle: Circle): CircleDto {
        const createdAt = circle.createdAt.toISOString();
        const name = circle.getName();
        const memberIds = circle.getMembers().map(m => m.id);
        const habitIds = circle.getHabits().map(h => h.id);
        
        return {
            id: circle.id,
            createdAt: createdAt,
            name: name,
            memberIds: memberIds,
            habitIds: habitIds
        }
    }
}