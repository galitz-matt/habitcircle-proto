export type ResolveSessionResult = 
    | { type: "Success", userId: string }
    | { type: "InvalidToken" }