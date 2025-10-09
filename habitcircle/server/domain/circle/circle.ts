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

    addMember(user: User): Circle {
        if (!user) throw new Error("User cannot be null");
        if (this.members.some(u => u.id === user.id)) throw new Error("User is already member of this group");
        return new Circle(this.id, this.createdAt, this.name, this.owner, [...this.members, user], this.habits);
    }
    
    
}