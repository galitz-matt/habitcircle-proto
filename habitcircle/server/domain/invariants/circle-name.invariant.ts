export class CircleNameInvariants {

    static isValidLength(s: string): boolean {
        return 1 <= s.length && s.length <= 50;
    }
}