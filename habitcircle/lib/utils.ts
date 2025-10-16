import { RESERVED_USERNAMES, VALID_USERNAME_CHARACTERS_PATTERN } from "./constants";

export const IdGenerator = {
    new: (): string => crypto.randomUUID()
};

export const UsernameUtils = {
    normalize: (s: string): string => s.normalize("NFKC").trim(),
    isValidLength: (s: string): boolean => 3 <= s.length && s.length < 40,
    isValidCharacterSet: (s: string): boolean => VALID_USERNAME_CHARACTERS_PATTERN.test(s),
    isReserved: (s: string): boolean => RESERVED_USERNAMES.has(s),
    hasWhitespace: (s: string): boolean => /\s/.test(s),
}

export const PasswordUtils = {
    hasWhitespace: (s: string): boolean => /\s/.test(s),
    isValidLength: (s: string): boolean => 12 <= s.length && s.length < 1000,
    hasUppercase: (s: string): boolean => /\p{Lu}/u.test(s),
    hasLowercase: (str: string): boolean => /\p{Ll}/u.test(str),
    hasSpecial: (s: string): boolean => /[^\p{L}\p{N}]/u.test(s),
}