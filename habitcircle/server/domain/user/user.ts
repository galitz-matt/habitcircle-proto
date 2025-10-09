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

        const userId = crypto.randomUUID();
        return new User(userId, new Date(), name, password);
    }
}