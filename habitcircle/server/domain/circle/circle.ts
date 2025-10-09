import { Habit } from "../habit/habit";
import { User } from "../user/user"

export class Circle {
    private constructor(
        readonly id: string,
        readonly createdAt: Date,
        readonly name: string,
        readonly owner: User,
        readonly members: User[],
        readonly habits: Habit[]
    ) {}

    static create(
        name: string, 
        owner: User, 
        members: User[] = [], 
        habits: Habit[] = []
    ): Circle {
        if (!name.trim()) throw new Error("Name cannot be empty");

        const circleId = crypto.randomUUID();
        return new Circle(
            circleId, 
            new Date(), 
            name, 
            owner, 
            members, 
            habits
        );
    }
}