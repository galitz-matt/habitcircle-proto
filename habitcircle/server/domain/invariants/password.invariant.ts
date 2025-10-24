export class PasswordInvariants {

    static isValidLength(s: string): boolean {
        return 12 <= s.length && s.length < 1000;
    }
}