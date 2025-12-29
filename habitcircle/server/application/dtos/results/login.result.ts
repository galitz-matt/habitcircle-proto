import type { LinkSession } from "../../models/link-session.model";
import type { Session } from "../../models/session.model"

export type LoginResult =
    | { 
        type: "SUCCESS"; 
        userId: string; 
        session: Session;
    }
    | { 
        type: "PENDING_LINK";
        linkSession: LinkSession
    }
    | { 
        type: "INVALID_CREDENTIALS";
    }
    | { 
        type: "USER_LOCKED";
    };

