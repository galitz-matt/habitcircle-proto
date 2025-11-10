import type { HabitRepository } from "@/server/domain/repositories/habit.repository";
import { RenameHabitCommand, RenameHabitResult } from "../use-cases/habit/rename-habit.use-case";
import { Result } from "@/lib/types";
import type { CircleRepository } from "@/server/domain/repositories/circle.repository";
import { failure, success } from "@/lib/utils";
import { HabitDtoMapper } from "../mappers/habit.dto-mapper";
import { inject, injectable } from "tsyringe";

@injectable()
export class HabitService {
    constructor(
        @inject("CircleRepository") private readonly circleRepo: CircleRepository,
        @inject("HabitRepository") private readonly habitRepo: HabitRepository,
    ) {}

    async renameHabit(actorId: string, cmd: RenameHabitCommand): Promise<Result<RenameHabitResult>> {
        try {
            const circle = await this.circleRepo.findById(cmd.circleId);

            if (!circle.isOwnedBy(actorId))
                return failure("User cannot rename habits in circle they do not own");
            if (!circle.hasHabitById(cmd.habitId))
                return failure("Habit is not in circle");

            const habit = await this.habitRepo.findById(cmd.habitId);
            const updatedHabit = habit.setName(cmd.name);
            await this.habitRepo.save(updatedHabit);
            const habitDto = HabitDtoMapper.toDto(updatedHabit);

            return success({ habit: habitDto });
        } catch (err) {
            return failure(err);
        }
    }
}