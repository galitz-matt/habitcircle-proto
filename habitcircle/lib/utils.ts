import { UNEXPECTED_ERROR } from "./constants";
import type { Result } from "./types";
import { generateFromEmail, generateUsername } from "unique-username-generator";

export const IdGenerator = {
    new: (): string => crypto.randomUUID()
};

export const UsernameGenerator = {
    new: (): string => generateUsername("", 5, 40),
    newFromEmail: (email: string): string => generateFromEmail(email, 3)
                                        .substring(0, Math.min(40, email.length))
};

export const StringUtils = {
    normalize: (s: string): string => s.normalize("NFKC").trim(),
    hasWhitespace: (s: string): boolean => /\s/.test(s),
    hasUppercase: (s: string): boolean => /\p{Lu}/u.test(s),
    hasLowercase: (s: string): boolean => /\p{Ll}/u.test(s),
    hasSpecial: (s: string): boolean => /[^\p{L}\p{N}\s]/u.test(s),
}

export const failure = <T>(err: unknown): Result<T> => {
    if (err instanceof Error)
        return { ok: false, error: err.message };
    if (typeof err === "string") {
        return { ok: false, error: err};
    }
    return { ok: false, error: UNEXPECTED_ERROR };
}

export const success = <T>(value: T): Result<T> => {
    return { ok: true, value: value};
}