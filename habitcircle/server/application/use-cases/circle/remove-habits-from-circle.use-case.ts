import type { CircleDto } from "../dtos/circle.dto";

export type RemoveHabitsFromCircleCommand = {
    circleId: string;
    toRemoveHabitIds: string[];
}

export type RemoveHabitsFromCircleResult = {
    circle: CircleDto;
}

