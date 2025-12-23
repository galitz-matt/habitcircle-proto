export type CreateResult =
    | { type: "CREATED" }
    | { type: "ALREADY_EXISTS" }