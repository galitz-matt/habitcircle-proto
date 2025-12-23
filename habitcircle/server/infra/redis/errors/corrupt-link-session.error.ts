export class CorruptLinkSessionError extends Error {
    constructor(token: string, raw: string) {
        super(`Invalid sessiond data for token ${token}`);
        this.name = "CorruptLinkSessionError";
    }
}