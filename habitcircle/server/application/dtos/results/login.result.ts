export type LoginResult =
    | { type: "Success"; sessionToken: string }
    | { type: "InvalidCredentials"}
    | { type: "UserLocked" };