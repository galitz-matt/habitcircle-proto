export const RESERVED_USERNAMES = new Set([
    "admin",
    "root",
    "support",
    "api",
    "null",
    "undefined"
]);

export const VALID_USERNAME_CHARACTERS_PATTERN = /^[\p{L}\p{M}\p{N}_.-]+$/u
export const VALID_NAME_CHARACTERS_PATTERN = /^[\p{L}\p{M}\p{N}_.\-\s]+$/u;

export const BCRYPT_HASH_PATTERN = /^\$2[aby]\$[0-3][0-9]\$[A-Za-z0-9./]{53}$/;

export const UNEXPECTED_ERROR = "Unexpected Error"