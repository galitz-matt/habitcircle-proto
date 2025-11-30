import type { Post } from "@/server/domain/entities/post.entity";

export interface PostRepository {
    findById(id: string): Promise<Post | null>;
    findByCompletionId(completionId: string): Promise<Post | null>;
    findByUserId(userId: string): Promise<Post[]>;
    findByHabitId(habitId: string): Promise<Post[]>;
    create(post: Post): Promise<void>;
    update(post: Post): Promise<void>;
    delete(post: Post): Promise<void>;
}