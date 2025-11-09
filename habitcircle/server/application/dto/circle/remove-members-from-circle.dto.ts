import type { CircleDto } from "./circle.dto";

export type RemoveMembersFromCircleCommand = {
    requestingUserId: string;
    circleId: string;
    memberIdsToRemove: string[];
}

export type RemoveMembersFromCircleResult = {
    circle: CircleDto;
}