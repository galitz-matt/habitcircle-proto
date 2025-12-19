export type InvalidateSessionTokenResult =
    | { type: "Success" }
    | { type: "TokenDoesNotExist" }