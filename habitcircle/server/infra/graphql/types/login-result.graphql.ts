export type GqlLoginSuccess = {
    __typename: "LoginSuccess";
    userId: string;
};

export type GqlInvalidCredentials = {
    __typename: "InvalidCredentials";
    reason: string;
};

export type GqlPendingLink = {
    __typename: "PendingLink";
    linkSession: {
        token: string;
        allowedProviders: string[];
        issuedAt: string;
    };
};

export type GqlLoginResult =
    | GqlLoginSuccess
    | GqlInvalidCredentials
    | GqlPendingLink