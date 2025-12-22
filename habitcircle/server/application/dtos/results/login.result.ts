export type LoginResult =
    | { 
        type: "SUCCESS"; 
        userId: string; 
    }
    | { 
        type: "PENDING_LINK";
        allowedProviders: string[];
        linkToken: string;
        expiresAt: string;
    }
    | { 
        type: "INVALID_CREDENTIALS";
    }
    | { 
        type: "USER_LOCKED";
    };

