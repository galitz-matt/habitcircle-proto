import { VALID_USERNAME_CHARACTERS_PATTERN } from "./constants";

export const IdGenerator = {
    new: (): string => crypto.randomUUID()
};

export const StringUtils = {
    normalize: (s: string): string => s.normalize("NFKC").trim(),
    hasWhitespace: (s: string): boolean => /\s/.test(s),
    hasUppercase: (s: string): boolean => /\p{Lu}/u.test(s),
    hasLowercase: (s: string): boolean => /\p{Ll}/u.test(s),
    hasSpecial: (s: string): boolean => /[^\p{L}\p{N}\s]/u.test(s),
    isValidCharacterSet: (s: string): boolean => VALID_USERNAME_CHARACTERS_PATTERN.test(s),
}