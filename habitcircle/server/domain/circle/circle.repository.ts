import { Circle } from "./circle.entity";

export interface CircleRepository {
    findById(id: string): Promise<Circle | null>;
    findByName(name: string): Promise<Circle[]>;
    findByUserId(userId: string): Promise<Circle[]>;
    save(circle: Circle): Promise<void>;
    delete(id: string): Promise<void>;
}