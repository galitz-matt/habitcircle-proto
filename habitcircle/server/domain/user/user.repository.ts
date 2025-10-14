import { User } from "./user.entity";

export interface UserRepository {
    findById(id: string): Promise<User | null>;
    findByUsername(username: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    save(user: User): Promise<void>;
    delete(id: string): Promise<void>;
}