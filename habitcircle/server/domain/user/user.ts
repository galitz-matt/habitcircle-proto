export class User {
    private constructor(
        readonly id: string,
        readonly username: string,
        readonly password: string
    ) {}

    static create(username: string, password: string): User {
        if (!username.trim()) throw new Error("Username cannot be empty");
        if (!password.trim()) throw new Error("Password cannot be empty");

        const userId = crypto.randomUUID();
        return new User(userId, username, password);
    }
}