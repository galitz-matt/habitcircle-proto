import { Result } from "@/lib/types";
import { CircleRepository } from "@/server/domain/repositories/circle.repository";
import { RegisterCircleCommand, RegisterCircleResult } from "../dto/circle/register-circle.dto";
import { Circle } from "@/server/domain/entities/circle.entity";
import { UserRepository } from "@/server/domain/repositories/user.repository";
import { Habit } from "@/server/domain/entities/habit.entity";
import { DeleteCircleCommand, DeleteCircleResult } from "../dto/circle/delete-circle.dto";
import { AddHabitsToCircleCommand, AddHabitsToCircleResult} from "../dto/circle/add-habits-to-circle.dto";
import { HabitRepository } from "@/server/domain/repositories/habit.repository";
import { serviceFailure } from "@/lib/utils";
import { RemoveHabitsFromCircleCommand, RemoveHabitsFromCircleResult} from "../dto/circle/remove-habits-from-circle.dto";
import { AddMembersToCircleCommand, AddMembersToCircleResult } from "../dto/circle/add-members-to-circle.dto";

export class CircleService {
    constructor(
        private readonly circleRepo: CircleRepository,
        private readonly userRepo: UserRepository,
        private readonly habitRepo: HabitRepository
    ) {}

    async addHabitsToCircle(cmd: AddHabitsToCircleCommand): Promise<Result<AddHabitsToCircleResult>> {
        try {
            const circle = await this.circleRepo.findById(cmd.circleId);
            
            if (cmd.requestingUserId !== circle.getOwner().id)
                return serviceFailure("Cannot add habits to circle you do not own")

            const habits = cmd.habitTemplates.map(h => (
                Habit.create(
                    h.name,
                    cmd.circleId
                )
            ));
            const circleWithNewHabits = circle.addHabits(habits);
            
            await this.circleRepo.save(circleWithNewHabits);
            return { ok: true, value: { result: true } };

        } catch (err) {
            return serviceFailure(err);
        }
    }

    async addMembersToCircle(cmd: AddMembersToCircleCommand): Promise<Result<AddMembersToCircleResult>> {
        try {
            const circle = await this.circleRepo.findById(cmd.circleId);

            if (cmd.requestingUserId !== circle.getOwner().id)
                return serviceFailure("Cannot add members to circle you do not own");

            const newMembers = await Promise.all(
                cmd.toBeAddedUserIds.map(id => this.userRepo.findById(id))
            )
            const circleWithNewMembers = circle.addMembers(newMembers);

            await this.circleRepo.save(circleWithNewMembers);
            return { ok: true, value: { memberIds: cmd.toBeAddedUserIds } }
        } catch (err) {
            return serviceFailure(err);
        }
    }

    async deleteCircle(cmd: DeleteCircleCommand): Promise<Result<DeleteCircleResult>> {
        const circle = await this.circleRepo.findById(cmd.circleId);
        const circleOwnerId = circle.getOwner().id;
        if (circleOwnerId !== cmd.requestingUserId)
            return serviceFailure("Cannot delete circle you do not own");

        try {
            await this.circleRepo.delete(cmd.circleId);
            return { ok: true, value: { success: true } };
        } catch (err) {
            return serviceFailure(err);
        }
    }

    async registerCircle(cmd: RegisterCircleCommand): Promise<Result<RegisterCircleResult>> {
        try {
            const owner = await this.userRepo.findById(cmd.requestingUserId);
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
            return serviceFailure(err);
        }
    }

    async removeHabitsFromCircle(cmd: RemoveHabitsFromCircleCommand): Promise<Result<RemoveHabitsFromCircleResult>> {
        try {
            const circle = await this.circleRepo.findById(cmd.circleId);
            const ownerId = circle.getOwner().id;
            
            if (cmd.requestingUserId !== ownerId) {
                return serviceFailure("Cannot delete habit in circle you do not own");
            }
            
            await this.habitRepo.deleteManyByCircleId(cmd.habitIds, cmd.circleId);
            return { ok: true, value: { success: true } }
        } catch (err) {
            return serviceFailure(err);
        }
    }
}