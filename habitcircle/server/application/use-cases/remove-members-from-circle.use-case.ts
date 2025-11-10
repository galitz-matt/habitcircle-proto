import type { CircleDto } from "../dtos/circle.dto";

export type RemoveMembersFromCircleCommand = {
    circleId: string;
    toRemoveMemberIds: string[];
}

export type RemoveMembersFromCircleResult = {
    circle: CircleDto;
}