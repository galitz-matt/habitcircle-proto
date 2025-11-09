import type { CircleDto } from "../dtos/circle.dto";

export type RemoveHabitsFromCircleCommand = {
    circleId: string;
    habitIdsToRemove: string[];
}

export type RemoveHabitsFromCircleResult = {
    circle: CircleDto;
}

