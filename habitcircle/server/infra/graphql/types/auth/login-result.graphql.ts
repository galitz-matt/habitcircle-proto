export type GqlLoginSuccess = {
    __typename: "LoginSuccess";
    userId: string;
};

export type GqlLoginFailure = {
    __typename: "LoginFailure";
    reason: string;
};

export type GqlPendingLink = {
    __typename: "PendingLink";
    allowedProviders: string[];
};

export type GqlLoginResult =
    | GqlLoginSuccess
    | GqlLoginFailure
    | GqlPendingLink