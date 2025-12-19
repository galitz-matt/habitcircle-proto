export type InvalidateSessionTokenResult =
    | { type: "Success" }
    | { type: "InvalidToken" }