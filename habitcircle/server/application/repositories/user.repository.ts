import { User } from "@/server/domain/entities/user.entity";

export interface UserRepository {
    findById(id: string): Promise<User>;
    findByUsername(username: string): Promise<User>;
    findAll(): Promise<User[]>;
    save(user: User): Promise<void>;
    delete(id: string): Promise<void>;
}