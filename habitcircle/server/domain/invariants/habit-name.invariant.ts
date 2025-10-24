export class HabitNameInvariants {

    static isValidLength(s: string): boolean {
        return 2 <= s.length && s.length < 50 
    }
}