export class CorruptSessionError extends Error {
    constructor(token: string, raw: string) {
        super(`Invalid session data for token ${token}\ndata: ${raw}`);
        this.name = "CorruptSessionError";
    }
}