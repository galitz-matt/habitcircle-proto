export type VerifySessionTokenResult = 
    | { type: "Success" }
    | { type: "InvalidToken" }