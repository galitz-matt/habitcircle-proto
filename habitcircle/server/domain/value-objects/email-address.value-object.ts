
export class EmailAddress {
    private constructor(
        readonly value: string
    ) {}

    static create(value: string): EmailAddress {
        return new EmailAddress(value);
    }

    static rehydrate(value: string): EmailAddress {
        return new EmailAddress(value);
    }

    toString(): string {
        return this.value;
    }

}