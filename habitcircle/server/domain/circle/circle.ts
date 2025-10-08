import { User } from "@server/domain/user/user"

export class Circle {
    private constructor(
        readonly circleId: string,
        readonly name: string,
        readonly users: User[],
        readonly createdAt: Date
    ) {}

    static create(name: string): Circle {
        if (!name.trim()) throw new Error("Name cannot be empty");

        const circleId = crypto.randomUUID();
        return new Circle(circleId, name, [] as User[], new Date());
    }
}