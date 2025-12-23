import type { LinkSession } from "@/server/application/models/link-session.model"
import type { Session } from "@/server/application/models/session.model"

export type FindSessionByTokenResult =
    | { 
        type: "FOUND", 
        session: Session
    }
    | { type: "NOT_FOUND" }

export type FindLinkSessionByTokenResult =
    | {
        type: "FOUND",
        linkSession: LinkSession
    }
    | { type: "NOT_FOUND" }