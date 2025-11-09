import type { CircleDto } from "../dtos/circle.dto";

export type RemoveMembersFromCircleCommand = {
    circleId: string;
    memberIdsToRemove: string[];
}

export type RemoveMembersFromCircleResult = {
    circle: CircleDto;
}