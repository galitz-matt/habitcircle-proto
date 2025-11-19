import type { Post } from "@/server/domain/entities/post.entity";

export interface PostRepository {
    findById(id: string): Promise<Post | null>;
    findByCompletionId(completionId: string): Promise<Post | null>;
    findByUserId(userId: string): Promise<Post[]>;
    findByHabitId(habitId: string): Promise<Post[]>;
    save(post: Post): Promise<void>;
    delete(id: string): Promise<void>;
}