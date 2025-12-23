import { CreateResult } from "@/server/infra/redis/models/results/create.result";
import { Session } from "../models/session.model";
import { DeleteResult } from "@/server/infra/redis/models/results/delete.result";
import { FindByTokenResult } from "@/server/infra/redis/models/results/find-by-token.result";

export interface SessionRepository {
    create(session: Session, ttl: number): Promise<CreateResult>;
    findByToken(token: string): Promise<FindByTokenResult>
    delete(token: string): Promise<DeleteResult>;
}