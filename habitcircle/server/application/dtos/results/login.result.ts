export type LoginWithCredentialsResult =
    | { type: "Success"; sessionToken: string }
    | { type: "InvalidCredentials"}
    | { type: "UserLocked" };