import { Result } from "@/lib/types";
import { CircleRepository } from "@/server/domain/repositories/circle.repository";
import { RegisterCircleCommand, RegisterCircleResult } from "../dto/circle/register-circle.dto";
import { Circle } from "@/server/domain/entities/circle.entity";
import { UserRepository } from "@/server/domain/repositories/user.repository";
import { Habit } from "@/server/domain/entities/habit.entity";
import { DeleteCircleCommand, DeleteCircleResult } from "../dto/circle/delete-circle.dto";
import { AddHabitCommand, AddHabitResult } from "../dto/circle/add-habit.dto";
import { HabitRepository } from "@/server/domain/repositories/habit.repository";
import { badResult } from "@/lib/utils";

export class CircleService {
    constructor(
        private readonly circleRepo: CircleRepository,
        private readonly userRepo: UserRepository,
        private readonly habitRepo: HabitRepository
    ) {}

    async register(cmd: RegisterCircleCommand): Promise<Result<RegisterCircleResult>> {
        try {
            const owner = await this.userRepo.findById(cmd.ownerId);
            const members = await Promise.all(
                cmd.memberIds.map(id => this.userRepo.findById(id))
            );
            const circle = Circle.create(
                cmd.circleName,
                owner,
                members
            )
            const habits = cmd.habitTemplates.map(
                template => Habit.create(template.name, circle.id)
            )
            const circleWithHabits = circle.addHabits(habits);

            await this.circleRepo.save(circleWithHabits);
            return { ok: true, value: { circleId: circle.id, name: circle.name.get() } }

        } catch (err) {
            return badResult(err);
        }
    }

    async addHabit(cmd: AddHabitCommand): Promise<Result<AddHabitResult>> {
        try {
            const habit = Habit.create(
                cmd.habitTemplate.name,
                cmd.circleId
            )
            const circle = await this.circleRepo.findById(cmd.circleId);
            const circleWithHabit = circle.addHabit(habit);
            
            await Promise.all([
                this.habitRepo.save(habit),
                this.circleRepo.save(circleWithHabit)
            ])
            
            return { ok: true, value: { result: true } }
        } catch (err) {
            return badResult(err);
        }
    }

    async delete(cmd: DeleteCircleCommand): Promise<Result<DeleteCircleResult>> {
        const circle = await this.circleRepo.findById(cmd.circleId);
        const circleOwnerId = circle.getOwner().id;
        if (circleOwnerId !== cmd.requestingUserId)
            return badResult("Cannot delete circle you do not own");

        try {
            await this.circleRepo.delete(cmd.circleId)
            return { ok: true, value: { result: true } }
        } catch (err) {
            return badResult(err);
        }
    }
}