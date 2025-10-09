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
        if (this.members.some(u => u.id === user.id)) throw new Error("User is already member of this circle");
        return new Circle(
            this.id, 
            this.createdAt, 
            this.name, 
            this.owner, 
            [...this.members, user], 
            this.habits
        );
    }
    
    addHabit(habit: Habit): Circle {
        if (this.habits.some(h => h.id === habit.id)) throw new Error("Habit is already in this circle");
        return new Circle(
            this.id, 
            this.createdAt, 
            this.name, 
            this.owner, 
            this.members, 
            [...this.habits, habit]
        );
    }

    deleteMember(user: User): Circle {
        if (!this.members.find(u => u.id === user.id)) throw new Error("User is not in circle");
        return new Circle(
            this.id, 
            this.createdAt, 
            this.name, 
            this.owner, 
            this.members.filter(u => u.id !== user.id), 
            this.habits
        );
    }

    deleteHabit(habit: Habit): Circle {
        if (!this.habits.find(h => h.id === habit.id)) throw new Error("Habit is not in circle");
        return new Circle(
            this.id, 
            this.createdAt, 
            this.name, 
            this.owner, 
            this.members,
            this.habits.filter(h => h.id !== habit.id)
        );
    }
}