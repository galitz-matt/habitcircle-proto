
export class DomainError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "DomainError";
    }
}

export class AuthorizationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "PermissionError";
    }
}

export class NotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NotFoundError"
    }
}