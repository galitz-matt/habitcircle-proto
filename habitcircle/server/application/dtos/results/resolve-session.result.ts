export type ResolveSessionResult = 
    | { type: "SUCCESS", userId: string }
    | { type: "INVALID_TOKEN" }