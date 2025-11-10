import type { CircleDto } from "../dtos/circle.dto";

export type AddMembersToCircleCommand = {
    circleId: string;
    toAddUserIds: string[];
}

export type AddMembersToCircleResult = {
    circle: CircleDto
}