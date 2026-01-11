export type GqlAuthenticated = {
    userId: string;
}

export type GqlUnauthenticated = {
    reason: string;
}

export type GqlMeResult = 
    | GqlAuthenticated
    | GqlUnauthenticated