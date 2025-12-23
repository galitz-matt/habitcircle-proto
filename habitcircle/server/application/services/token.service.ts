export class TokenService {
    static generateToken(): string {
        return crypto.randomUUID();
    }
}