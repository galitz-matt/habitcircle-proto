export const RESERVED_USERNAMES = new Set([
    "admin",
    "root",
    "support",
    "api",
    "null",
    "undefined"
]);

export const VALID_USERNAME_CHARACTERS_PATTERN = /^[\p{L}\p{M}\p{N}_.-]+$/u