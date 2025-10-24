import { RESERVED_USERNAMES, VALID_USERNAME_CHARACTERS_PATTERN } from "./constants";

export const IdGenerator = {
    new: (): string => crypto.randomUUID()
};

export const StringUtils = {
    normalize: (s: string): string => s.normalize("NFKC").trim(),
    hasWhitespace: (s: string): boolean => /\s/.test(s),
    hasUppercase: (s: string): boolean => /\p{Lu}/u.test(s),
    hasLowercase: (s: string): boolean => /\p{Ll}/u.test(s),
    hasSpecial: (s: string): boolean => /[^\p{L}\p{N}]/u.test(s),
    isValidCharacterSet: (s: string): boolean => VALID_USERNAME_CHARACTERS_PATTERN.test(s),
}

export const UsernameInvariants = {
    isValidLength: (s: string): boolean => 3 <= s.length && s.length < 40,
    isReserved: (s: string): boolean => RESERVED_USERNAMES.has(s),
}

export const PasswordInvariants = {
    isValidLength: (s: string): boolean => 12 <= s.length && s.length < 1000,
}

export const HabitNameInvariants = {
    isValidLength: (s: string): boolean => 2 <= s.length && s.length < 50 
}