import { Result } from "@/lib/types";
import { CircleRepository } from "@/server/domain/repositories/circle.repository";
import { RegisterCircleCommand, RegisterCircleResult } from "../use-cases/register-circle.use-case";
import { Circle } from "@/server/domain/entities/circle.entity";
import { UserRepository } from "@/server/domain/repositories/user.repository";
import { Habit } from "@/server/domain/entities/habit.entity";
import { DeleteCircleCommand, DeleteCircleResult } from "../use-cases/delete-circle.use-case";
import { AddHabitsToCircleCommand, AddHabitsToCircleResult} from "../use-cases/add-habits-to-circle.use-case";
import { HabitRepository } from "@/server/domain/repositories/habit.repository";
import { serviceFailure } from "@/lib/utils";
import { RemoveHabitsFromCircleCommand, RemoveHabitsFromCircleResult} from "../use-cases/remove-habits-from-circle.use-case";
import { AddMembersToCircleCommand, AddMembersToCircleResult } from "../use-cases/add-members-to-circle.use-case";
import { RemoveMembersFromCircleCommand, RemoveMembersFromCircleResult } from "../use-cases/remove-members-from-circle.use-case";
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

            const habits = cmd.habitDtos.map(h => (
                Habit.create(
                    h.name,
                    cmd.circleId
                )
            ));
            const circleWithNewHabits = circle.addHabits(habits);
            
            await this.circleRepo.save(circleWithNewHabits);
            
            const circleDto = CircleDtoMapper.toDto(circleWithNewHabits)
            return { ok: true, value: { circle: circleDto } };

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

            const circleDto = CircleDtoMapper.toDto(circleWithNewMembers)
            return { ok: true, value: { circle: circleDto } }
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
            return { ok: true, value: { deletedCircleId: circle.id } };
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
            const habits = cmd.habitDtos.map(
                template => Habit.create(template.name, circle.id)
            )
            const circleWithHabits = circle.addHabits(habits);
            await this.circleRepo.save(circleWithHabits);

            const circleDto = CircleDtoMapper.toDto(circleWithHabits);
            return { ok: true, value: { circle: circleDto } }

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
            
            const habitsToRemove = await Promise.all(
                cmd.habitIdsToRemove.map(id => this.habitRepo.findById(id))
            )
            await this.habitRepo.deleteManyByCircleId(cmd.habitIdsToRemove, cmd.circleId);

            const circleWithRemovedHabits = circle.removeHabits(habitsToRemove);
            const circleDto = CircleDtoMapper.toDto(circleWithRemovedHabits);
            return { ok: true, value: { circle: circleDto } }
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

            const circleDto = CircleDtoMapper.toDto(circleWithRemovedMembers);
            return { ok: true, value: { circle: circleDto }}

        } catch (err) {
            return serviceFailure(err);
        }
    }
}