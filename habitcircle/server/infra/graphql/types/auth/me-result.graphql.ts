export type GqlAuthenticated = {
    __typename: "Authenticated";
    userId: string;
}

export type GqlUnauthenticated = {
    __typename: "Unauthenticated";
    reason: string;
}

export const GqlUnauthenticatedNoTokenProvided: GqlUnauthenticated = {
    __typename: "Unauthenticated",
    reason: "No session token provided"
}

export type GqlMeResult = 
    | GqlAuthenticated
    | GqlUnauthenticated