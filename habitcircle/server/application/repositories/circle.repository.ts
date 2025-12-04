import type { Circle } from "@/server/domain/entities/circle/circle.entity";
import type { CircleName } from "@/server/domain/value-objects/circle/circle-name.value-object";

export interface CircleRepository {
    findById(id: string): Promise<Circle | null>;
    findByCircleName(name: CircleName): Promise<Circle[]>;
    create(circle: Circle): Promise<void>;
    update(circle: Circle): Promise<void>;
    delete(id: string): Promise<void>;
}