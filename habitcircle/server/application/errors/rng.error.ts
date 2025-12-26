export class RngError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "RngError";
    }
}