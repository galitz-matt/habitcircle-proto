export abstract class ValueObject<T> {
    abstract equals(other: T): boolean | Promise<boolean>
    abstract toString(): string

    static create(..._args: unknown[]): unknown {
        throw new Error("ValueObject.create() must be implemented in subclass.")
    }

    static rehydrate(..._args: unknown[]): unknown {
        throw new Error("ValueObject.rehydrate() must be implemented in subclass")
    }
}