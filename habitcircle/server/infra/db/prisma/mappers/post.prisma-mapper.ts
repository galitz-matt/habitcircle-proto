import { Post } from "@/server/domain/entities/post.entity";
import { Post as PostRecord } from "../generated";
import { PostCaption } from "@/server/domain/value-objects/post-caption.value-object";
import { PostPrismaDto } from "../dtos/post-prisma.dto";

export class PostPrismaMapper {
    static toDomain(record: PostRecord): Post {
        return Post.rehydrate(
            record.id,
            record.createdAt,
            record.userId,
            record.habitId,
            record.completionId,
            record.photoKey ?? undefined,
            record.caption ? PostCaption.rehydrate(record.caption) : undefined
        );
    }

    static toPersistence(post: Post): PostPrismaDto {
        return {
            scalars: {
                id: post.id,
                photoKey: post.photoKey,
                caption: post.caption?.toString()
            },
            userId: post.userId,
            habitId: post.habitId,
            completionId: post.completionId,
        };
    }
}