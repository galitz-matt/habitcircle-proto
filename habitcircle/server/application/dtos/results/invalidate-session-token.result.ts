export type InvalidateSessionTokenResult =
    | { type: "SUCCESS" }
    | { type: "INVALID_TOKEN" }