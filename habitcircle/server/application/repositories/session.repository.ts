import { Session } from "../models/session.model";

export interface SessionRepository {
    create(session: Session, ttlSeconds: number): Promise<void>;
    findByToken(sessionToken: string): Promise<Session | null>
    delete(sessionToken: string): Promise<void>;
}