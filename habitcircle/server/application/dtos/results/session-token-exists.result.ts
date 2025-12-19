export type SessionTokenExistsResult = 
    | { type: "Success", userId: string }
    | { type: "InvalidToken" }