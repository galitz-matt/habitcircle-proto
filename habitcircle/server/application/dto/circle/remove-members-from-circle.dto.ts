import type { CircleDto } from "./circle.dto";

export type RemoveMembersFromCircleCommand = {
    circleId: string;
    memberIdsToRemove: string[];
}

export type RemoveMembersFromCircleResult = {
    circle: CircleDto;
}