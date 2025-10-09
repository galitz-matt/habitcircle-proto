import { Circle } from "./circle";

export interface CircleRepository {
    findById(id: string): Promise<Circle | null>;
    save(circle: Circle): Promise<void>;
    delete(id: string): Promise<void>;
}