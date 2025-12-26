import type { LinkSession } from "../../models/link-session.model";

export type LoginResult =
    | { 
        type: "SUCCESS"; 
        userId: string; 
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

