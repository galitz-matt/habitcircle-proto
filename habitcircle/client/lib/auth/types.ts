// LOGIN
export type LoginSuccess = {
    status: "success";
    userId: string;
};

export type LoginFailure = {
    status: "failure"
    reason: string;
};

export type PendingLink = {
    status: "pendingLink"
    allowedProviders: string[];
};

export type LoginResult =
    | LoginSuccess
    | LoginFailure
    | PendingLink

// ME
export type Authenticated = {
    status: "authenticated";
    userId: string;
}

export type Unauthenticated = {
    status: "unauthenticated";
    reason: string;
}

export type MeState =
    | Authenticated
    | Unauthenticated

