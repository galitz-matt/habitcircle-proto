import { Result } from "@/lib/types";
import { CircleRepository } from "@/server/domain/repositories/circle.repository";
import { RegisterCircleCommand, RegisterCircleResult } from "../use-cases/register-circle.use-case";
import { Circle } from "@/server/domain/entities/circle.entity";
import { UserRepository } from "@/server/domain/repositories/user.repository";
import { Habit } from "@/server/domain/entities/habit.entity";
import { DeleteCircleCommand, DeleteCircleResult } from "../use-cases/delete-circle.use-case";
import { AddHabitsToCircleCommand, AddHabitsToCircleResult} from "../use-cases/add-habits-to-circle.use-case";
import { HabitRepository } from "@/server/domain/repositories/habit.repository";
import { failure, success } from "@/lib/utils";
import { RemoveHabitsFromCircleCommand, RemoveHabitsFromCircleResult} from "../use-cases/remove-habits-from-circle.use-case";
import { AddMembersToCircleCommand, AddMembersToCircleResult } from "../use-cases/add-members-to-circle.use-case";
import { RemoveMembersFromCircleCommand, RemoveMembersFromCircleResult } from "../use-cases/remove-members-from-circle.use-case";
import { CircleDtoMapper } from "../mappers/circle.dto-mapper";
import { DomainError } from "@/lib/errors";

export class CircleService {
    constructor(
        private readonly circleRepo: CircleRepository,
        private readonly userRepo: UserRepository,
        private readonly habitRepo: HabitRepository
    ) {}

    async addHabitsToCircle(actorId: string, cmd: AddHabitsToCircleCommand): Promise<Result<AddHabitsToCircleResult>> {
        try {
            const circle = await this.circleRepo.findById(cmd.circleId);
            
            this.ensureOwner(actorId, circle);

            const habits = cmd.habitDtos.map(h => (
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

            this.ensureOwner(actorId, circle);

            const newMembers = await Promise.all(
                cmd.toBeAddedUserIds.map(id => this.userRepo.findById(id))
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
            const circle = await this.circleRepo.findById(cmd.circleId);

            this.ensureOwner(actorId, circle);

            await this.circleRepo.delete(cmd.circleId);
            return success({ deletedCircleId: circle.id });
        } catch (err) {
            return failure(err);
        }
    }

    async registerCircle(actorId: string, cmd: RegisterCircleCommand): Promise<Result<RegisterCircleResult>> {
        try {
            if (actorId !== cmd.ownerId)
                return failure("Cannot create circle for other user");

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
            return success({ circle: circleDto });

        } catch (err) {
            return failure(err);
        }
    }

    async removeHabitsFromCircle(actorId: string, cmd: RemoveHabitsFromCircleCommand): Promise<Result<RemoveHabitsFromCircleResult>> {
        try {
            const circle = await this.circleRepo.findById(cmd.circleId);
            
            this.ensureOwner(actorId, circle);
            
            const circleWithHabitsRemoved = circle.removeHabitsById(cmd.habitIdsToRemove);
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

            this.ensureOwner(actorId, circle);

            if (!cmd.memberIdsToRemove.every(id => circle.hasMemberById(id))) {
                return failure("One or users being removed are not members of this circle");
            }

            const circleWithRemovedMembers = circle.removeMembersById(cmd.memberIdsToRemove);
            await this.circleRepo.save(circleWithRemovedMembers);
            const circleDto = CircleDtoMapper.toDto(circleWithRemovedMembers);

            return success({ circle: circleDto });
        } catch (err) {
            return failure(err);
        }
    }

    private ensureOwner(actorId: string, circle: Circle): void {
        if (actorId !== circle.getOwner().id)
            throw new DomainError("User does not own this circle");
    }
}