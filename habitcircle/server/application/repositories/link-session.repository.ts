import { CreateResult } from "@/server/infra/redis/models/results/create.result";
import { LinkSession } from "../models/link-session.model";
import { DeleteResult } from "@/server/infra/redis/models/results/delete.result";
import { FindByTokenResult } from "@/server/infra/redis/models/results/find-by-token.result";

export interface LinkSessionRepository {
    create(linkSession: LinkSession, ttl: number): Promise<CreateResult>;
    findByToken(token: string): Promise<FindByTokenResult>;
    delete(token: string): Promise<DeleteResult>;
}