import type { CircleDto } from "@/server/application/dtos/circle.dto";

export type GetCircleQuery = {
    circleId: string;
}

export type GetCircleResult = {
    circle: CircleDto
}