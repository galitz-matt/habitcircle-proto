import type { LinkSession } from "@/server/application/models/link-session.model";
import type { Session } from "@/server/application/models/session.model"

export type FindByTokenResult =
    | { 
        type: "FOUND", 
        session: LinkSession | Session
    }
    | { type: "NOT_FOUND" }