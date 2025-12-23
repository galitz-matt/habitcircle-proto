export class CorruptSessionError extends Error {
    constructor(token: string, raw: string) {
        super(`Invalid session data for token ${token}`);
        this.name = "CorruptSessionError";
    }
}