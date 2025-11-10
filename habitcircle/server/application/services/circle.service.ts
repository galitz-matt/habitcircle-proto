import { Result } from "@/lib/types";
import { CircleRepository } from "@/server/domain/repositories/circle.repository";
import { RegisterCircleCommand, RegisterCircleResult } from "../use-cases/circle/register-circle.use-case";
import { Circle } from "@/server/domain/entities/circle.entity";
import { UserRepository } from "@/server/domain/repositories/user.repository";
import { Habit } from "@/server/domain/entities/habit.entity";
import { DeleteCircleCommand, DeleteCircleResult } from "../use-cases/circle/delete-circle.use-case";
import { AddHabitsToCircleCommand, AddHabitsToCircleResult} from "../use-cases/circle/add-habits-to-circle.use-case";
import { HabitRepository } from "@/server/domain/repositories/habit.repository";
import { failure, success } from "@/lib/utils";
import { RemoveHabitsFromCircleCommand, RemoveHabitsFromCircleResult} from "../use-cases/circle/remove-habits-from-circle.use-case";
import { AddMembersToCircleCommand, AddMembersToCircleResult } from "../use-cases/circle/add-members-to-circle.use-case";
import { RemoveMembersFromCircleCommand, RemoveMembersFromCircleResult } from "../use-cases/circle/remove-members-from-circle.use-case";
import { CircleDtoMapper } from "@/server/application/mappers/circle.dto-mapper";
import { GetCircleQuery, GetCircleResult } from "@/server/application/use-cases/circle/get-circle.use-case";

export class CircleService {
    constructor(
        private readonly circleRepo: CircleRepository,
        private readonly userRepo: UserRepository,
        private readonly habitRepo: HabitRepository
    ) {}

    async addHabitsToCircle(actorId: string, cmd: AddHabitsToCircleCommand): Promise<Result<AddHabitsToCircleResult>> {
        try {
            const circle = await this.circleRepo.findById(cmd.circleId);
            
            if (!circle.isOwner(actorId))
                return failure("Cannot add habits to circle you do not own");

            const habits = cmd.toAddHabits.map(h => (
                Habit.create(
                    h.name,
                    cmd.circleId
                )
            ));
            const circleWithNewHabits = circle.addHabits(habits);
            
            await this.circleRepo.save(circleWithNewHabits);
            
            const circleDto = CircleDtoMapper.toDto(circleWithNewHabits);
            return success({ circle: circleDto });
        } catch (err) {
            return failure(err);
        }
    }

    async addMembersToCircle(actorId: string, cmd: AddMembersToCircleCommand): Promise<Result<AddMembersToCircleResult>> {
        try {
            const circle = await this.circleRepo.findById(cmd.circleId);

            if (!circle.isOwner(actorId)) 
                return failure("User cannot add members to circle they do not own");

            const newMembers = await Promise.all(
                cmd.toAddUserIds.map(id => this.userRepo.findById(id))
            )
            const circleWithNewMembers = circle.addMembers(newMembers);
            await this.circleRepo.save(circleWithNewMembers);

            const circleDto = CircleDtoMapper.toDto(circleWithNewMembers)
            return success({ circle: circleDto });
        } catch (err) {
            return failure(err);
        }
    }

    async deleteCircle(actorId: string, cmd: DeleteCircleCommand): Promise<Result<DeleteCircleResult>> {
        try {
            const circle = await this.circleRepo.findById(cmd.toDeleteCircleId);

            if (!circle.isOwner(actorId)) 
                return failure("User cannot delete circle they do not own");

            await this.circleRepo.delete(cmd.toDeleteCircleId);
            return success({ deletedCircleId: circle.id });
        } catch (err) {
            return failure(err);
        }
    }

    async getCircle(actorId: string, query: GetCircleQuery): Promise<Result<GetCircleResult>> {
        try {
            const circle = await this.circleRepo.findById(query.circleId);

            if (!circle.hasMemberById(actorId))
                return failure("User does not belong to this circle")

            const circleDto = CircleDtoMapper.toDto(circle);
            return success({ circle: circleDto });
        } catch (err) {
            return failure(err);
        }
    }

    async registerCircle(actorId: string, cmd: RegisterCircleCommand): Promise<Result<RegisterCircleResult>> {
        try {
            if (actorId !== cmd.ownerId)
                return failure("Cannot create circle for another user");

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

            const circleDto = CircleDtoMapper.toDto(circleWithHabits);
            return success({ circle: circleDto });

        } catch (err) {
            return failure(err);
        }
    }

    async removeHabitsFromCircle(actorId: string, cmd: RemoveHabitsFromCircleCommand): Promise<Result<RemoveHabitsFromCircleResult>> {
        try {
            const circle = await this.circleRepo.findById(cmd.circleId);
            
            if (!circle.isOwner(actorId))
                return failure("User cannot remove habits from circle they do not own");
            if (!cmd.toRemoveHabitIds.every(id => circle.hasHabitById(id)))
                return failure("One or more habits not found in circle");
            
            const circleWithHabitsRemoved = circle.removeHabitsById(cmd.toRemoveHabitIds);
            await this.circleRepo.save(circleWithHabitsRemoved);
            const circleDto = CircleDtoMapper.toDto(circleWithHabitsRemoved);

            return success({ circle: circleDto });
        } catch (err) {
            return failure(err);
        }
    }

    async removeMembersFromCircle(actorId: string, cmd: RemoveMembersFromCircleCommand): Promise<Result<RemoveMembersFromCircleResult>> {
        try { 
            const circle = await this.circleRepo.findById(cmd.circleId);

            if (!circle.isOwner(actorId))
                return failure("User cannot remove members from circle they do not own");
            if (!cmd.toRemoveMemberIds.every(id => circle.hasMemberById(id))) {
                return failure("One or users being removed are not members of this circle");
            }

            const circleWithRemovedMembers = circle.removeMembersById(cmd.toRemoveMemberIds);
            await this.circleRepo.save(circleWithRemovedMembers);
            const circleDto = CircleDtoMapper.toDto(circleWithRemovedMembers);

            return success({ circle: circleDto });
        } catch (err) {
            return failure(err);
        }
    }
}