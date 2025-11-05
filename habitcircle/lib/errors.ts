
export class DomainError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "DomainError";
    }
}

export class PermissionError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "PermissionError";
    }
}