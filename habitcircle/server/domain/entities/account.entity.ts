import { DomainError } from "@/lib/errors";
import { IdGenerator } from "@/lib/utils";
import { ExternalIdentity } from "../value-objects/external-identity.value-object";
import { TokenSet } from "../value-objects/token-set.value-object";

export class Account {
    private constructor(
        readonly id: string,
        readonly createdAt: Date,
        readonly updatedAt: Date,
        readonly userId: string,
        readonly externalIdentity: ExternalIdentity,
        readonly tokenSet: TokenSet
    ) {}


}