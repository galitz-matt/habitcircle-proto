import { IdGenerator } from "@lib/utils";

export class User {
    private constructor(
        readonly id: string,
        readonly createdAt: Date,
        readonly name: string,
        readonly password: string
    ) {}

    static create(name: string, password: string): User {
        if (!name.trim()) throw new Error("Username cannot be empty");
        if (!password.trim()) throw new Error("Password cannot be empty");

        return new User(IdGenerator.new(), new Date(), name, password);
    }

    static rehydrate(
        id: string,
        createdAt: Date,
        name: string,
        password: string,
    ): User {
        /* Used exclusively by repositories to reconstitue from persistence */
        return new User(id, createdAt, name, password);
    }
}