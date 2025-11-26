import { IdGenerator } from "@/lib/utils";
import { DomainError } from "@/lib/errors";
import { Password } from "../../value-objects/auth/password.value-object";
import { CredentialsAuthentication } from "./credentials-auth.entity";

export class CredentialsAccount {

    private constructor(
        private readonly _id: string,
        private readonly _userId: string,
        private readonly _auth: CredentialsAuthentication
    ) {}

    static create(
        userId: string, 
        password: Password
    ): CredentialsAccount {
        const auth = CredentialsAuthentication.create(password);

        return new CredentialsAccount(
            IdGenerator.new(),
            userId,
            auth 
        );
    }

    belongsTo(userId: string): boolean {
        return this._userId === userId;
    }

    get id(): string {
        return this._id;
    }

    get userId(): string {
        return this._userId;
    }

    static rehydrate(
        id: string,
        userId: string,
        auth: CredentialsAuthentication
    ): CredentialsAccount {
        if (!auth)
            throw new DomainError("Authentication method must be defined");
        
        return new CredentialsAccount(
            id,
            userId,
            auth
        );
    }
}