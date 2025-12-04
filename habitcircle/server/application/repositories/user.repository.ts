import type { User } from "@/server/domain/entities/user.entity";
import type { Username } from "@/server/domain/value-objects/username.value-object";

export interface UserRepository {
    findById(id: string): Promise<User | null>;
    findByUsername(username: Username): Promise<User | null>;
    create(user: User): Promise<void>;
    update(user: User): Promise<void>;
    delete(id: string): Promise<void>;
}