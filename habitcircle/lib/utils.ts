export const IdGenerator = {
    new: (): string => crypto.randomUUID()
};

export const PasswordValidator = {
    isValidLength: (s: string): boolean => 12 <= s.length && s.length < 1000,
    hasUppercase: (s: string): boolean => /\p{Lu}/u.test(s),
    hasLowercase: (str: string): boolean => /\p{Ll}/u.test(str),
    hasSpecial: (s: string): boolean => /[^\p{L}\p{N}]/u.test(s),
}