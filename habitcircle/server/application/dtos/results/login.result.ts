import type { LinkSession } from "../../models/link-session.model";
import type { Session } from "../../models/session.model"

export type LoginResult =
    | { 
        type: "SUCCESS"; 
        session: Session;
    }
    | { 
        type: "PENDING_LINK";
        linkSession: LinkSession
    }
    | { 
        type: "FAILURE";
        reason: string;
    }
    | { 
        type: "USER_LOCKED";
    };

