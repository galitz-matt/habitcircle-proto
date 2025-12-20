import { IdGenerator } from "@/lib/utils";
import { DomainError } from "@/lib/errors";
import { CredentialsAuthentication } from "./credentials-auth.entity";

export class CredentialsAccount {

    private constructor(
        private readonly _id: string,
        private readonly _auth: CredentialsAuthentication
    ) {}

    static create(
        password: string
    ): CredentialsAccount {
        const auth = CredentialsAuthentication.create(password);

        return new CredentialsAccount(
            IdGenerator.new(),
            auth 
        );
    }

    get id(): string {
        return this._id;
    }

    get passwordHash(): string {
        return this._auth.password;
    }

    get passwordVersion(): number {
        return this._auth.passwordVersion;
    }

    get failedAttempts(): number {
        return this._auth.failedAttempts;
    }

    get emailVerified(): boolean {
        return this._auth.emailVerified;
    }

    static rehydrate(
        id: string,
        auth: CredentialsAuthentication
    ): CredentialsAccount {
        if (!auth)
            throw new DomainError("Authentication method must be defined");
        
        return new CredentialsAccount(
            id,
            auth
        );
    }
}