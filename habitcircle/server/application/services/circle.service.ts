import { Result } from "@/lib/types";
import { CircleRepository } from "@/server/domain/repositories/circle.repository";
import { RegisterCircleCommand, RegisterCircleResult } from "../dto/circle/register-circle.dto";
import { Circle } from "@/server/domain/entities/circle.entity";
import { UserRepository } from "@/server/domain/repositories/user.repository";
import { Habit } from "@/server/domain/entities/habit.entity";
import { DeleteCircleCommand, DeleteCircleResult } from "../dto/circle/delete-circle.dto";
import { AddHabitCommand, AddHabitResult } from "../dto/circle/add-habit.dto";
import { HabitRepository } from "@/server/domain/repositories/habit.repository";
import { UNEXPECTED_ERROR } from "@/lib/constants";

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
                cmd.memberIds.map(this.userRepo.findById)
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
            const message = err instanceof Error ? err.message : UNEXPECTED_ERROR;
            return { ok: false, error: message }
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
            
            await this.habitRepo.save(habit);
            await this.circleRepo.save(circleWithHabit);
            
            return { ok: true, value: { result: true } }
        } catch (err) {
            const message = err instanceof Error ? err.message : UNEXPECTED_ERROR;
            return { ok: false, error: message };
        }
    }

    async delete(cmd: DeleteCircleCommand): Promise<Result<DeleteCircleResult>> {
        try {
            await this.circleRepo.delete(cmd.circleId)
            return { ok: true, value: { result: true } }
        } catch (err) {
            const message = err instanceof Error ? err.message : UNEXPECTED_ERROR;
            return { ok: false, error: message }
        }
    }
}