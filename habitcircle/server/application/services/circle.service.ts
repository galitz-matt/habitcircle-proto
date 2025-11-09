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
import { RemoveMembersFromCircleCommand, RemoveMembersFromCircleResult } from "../dto/circle/remove-members-from-circle.dto";
import { CircleDtoMapper } from "../mappers/circle.dto-mapper";

export class CircleService {
    constructor(
        private readonly circleRepo: CircleRepository,
        private readonly userRepo: UserRepository,
        private readonly habitRepo: HabitRepository
    ) {}

    async addHabitsToCircle(actorId: string, cmd: AddHabitsToCircleCommand): Promise<Result<AddHabitsToCircleResult>> {
        try {
            const circle = await this.circleRepo.findById(cmd.circleId);
            
            if (actorId !== circle.getOwner().id)
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

    async addMembersToCircle(actorId: string, cmd: AddMembersToCircleCommand): Promise<Result<AddMembersToCircleResult>> {
        try {
            const circle = await this.circleRepo.findById(cmd.circleId);
            if (actorId !== circle.getOwner().id)
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

    async deleteCircle(actorId: string, cmd: DeleteCircleCommand): Promise<Result<DeleteCircleResult>> {
        try {
            const circle = await this.circleRepo.findById(cmd.circleId);
            if (actorId !== circle.getOwner().id)
                return serviceFailure("Cannot delete circle you do not own");

            await this.circleRepo.delete(cmd.circleId);
            return { ok: true, value: { success: true } };
        } catch (err) {
            return serviceFailure(err);
        }
    }

    async registerCircle(actorId: string, cmd: RegisterCircleCommand): Promise<Result<RegisterCircleResult>> {
        try {
            if (actorId !== cmd.ownerId)
                return serviceFailure("Cannot create circle for other user");

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
            return serviceFailure(err);
        }
    }

    async removeHabitsFromCircle(actorId: string, cmd: RemoveHabitsFromCircleCommand): Promise<Result<RemoveHabitsFromCircleResult>> {
        try {
            const circle = await this.circleRepo.findById(cmd.circleId);
            const ownerId = circle.getOwner().id;
            
            if (actorId !== ownerId) {
                return serviceFailure("Cannot delete habit in circle you do not own");
            }
            
            await this.habitRepo.deleteManyByCircleId(cmd.habitIdsToRemove, cmd.circleId);
            return { ok: true, value: { success: true } }
        } catch (err) {
            return serviceFailure(err);
        }
    }

    async removeMembersFromCircle(actorId: string, cmd: RemoveMembersFromCircleCommand): Promise<Result<RemoveMembersFromCircleResult>> {
        try { 
            const circle = await this.circleRepo.findById(cmd.circleId);
            const ownerId = circle.getOwner().id;
            
            if (actorId !== ownerId) {
                return serviceFailure("Cannot remove members from circle you do not own");
            }

            const membersToRemove = await Promise.all(
                cmd.memberIdsToRemove.map(id => this.userRepo.findById(id))
            );

            if (!membersToRemove.every(member => circle.isMember(member))) {
                return serviceFailure("One or users being removed are not members of this circle");
            }

            const circleWithRemovedMembers = circle.removeMembers(membersToRemove);
            await this.circleRepo.save(circleWithRemovedMembers);

            const circleWithRemovedMembersDto = CircleDtoMapper.toDto(circleWithRemovedMembers);
            return { ok: true, value: { circle: circleWithRemovedMembersDto }}

        } catch (err) {
            return serviceFailure(err);
        }
    }
}