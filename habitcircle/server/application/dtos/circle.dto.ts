export type CircleDto = {
    id: string;
    createdAt: string; // ISO 8601 timestamp
    name: string;
    memberIds: string[];
    habitIds: string[];
}