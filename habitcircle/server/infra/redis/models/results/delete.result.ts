export type DeleteResult = 
    | { type: "DELETED" }
    | { type: "NOT_FOUND" }