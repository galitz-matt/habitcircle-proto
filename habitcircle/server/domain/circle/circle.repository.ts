import { Circle } from "./circle";

export interface CircleRepository {
    findById(id: string): Promise<Circle | null>;
    findByName(name: string): Promise<Circle[] | null>;
    findCirclesByUserId(userId: string): Promise<Circle[] | null>;
    save(circle: Circle): Promise<void>;
    delete(id: string): Promise<void>;
}