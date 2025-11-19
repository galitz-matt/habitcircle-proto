import { DomainError } from "@/lib/errors";
import { IdGenerator } from "@/lib/utils";
import { FriendshipStatus } from "@/server/domain/types/friendship-status";
import { Entity } from "./entity.abc";

export type FriendshipProps = {
    id: string,
    createdAt: Date,
    requesterId: string,
    addresseeId: string,
    status: FriendshipStatus
}

export type CreateFriendshipInput = {
    requesterId: string,
    addresseeId: string
}

export class Friendship extends Entity<FriendshipProps> {

    private constructor(props: FriendshipProps) { super(props) }

    static create(input: CreateFriendshipInput): Friendship {
        if (input.requesterId === input.addresseeId)
            throw new DomainError("Cannot friend yourself");

        const props: FriendshipProps = {
            id: IdGenerator.new(),
            createdAt: new Date(),
            requesterId: input.requesterId,
            addresseeId: input.addresseeId,
            status: FriendshipStatus.PENDING
        };

        return new Friendship(props);
    }

    accept(): Friendship {
        return this.clone({ status: FriendshipStatus.ACCEPTED })
    }

    decline(): Friendship {
        return this.clone({ status: FriendshipStatus.DECLINED })
    }

    get id() {
        return this.props.id;
    }

    get createdAt() {
        return this.props.createdAt;
    }

    get requesterId() {
        return this.props.requesterId;
    }

    get addresseeId() {
        return this.props.addresseeId;
    }

    get status(): FriendshipStatus {
        return this.props.status;
    }

    // Used by persistence layer
    static rehydrate(props: FriendshipProps): Friendship {
        return new Friendship(props);
    }

    // Internal constructor for clone() -> used by ABC
    protected create(props: FriendshipProps): this {
        return new Friendship(props) as this;
    }
}