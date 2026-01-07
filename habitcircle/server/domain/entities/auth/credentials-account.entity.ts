import { IdGenerator } from "@/server/lib/utils";

const VERSION_ZERO = 0;
const NO_ATTEMPTS = 0;

export type CreateCredentialsAccountProps = {
    password: string,
    emailAddress: string,
    emailVerified: boolean
}

export class CredentialsAccount {

    private constructor(
        private readonly _id: string,
        private _password: string,
        private _passwordVersion: number,
        private _failedAttempts: number,
        private _emailAddress: string,
        private _emailVerified: boolean
    ) {}

    static create(props: CreateCredentialsAccountProps): CredentialsAccount {
        return new CredentialsAccount(
            IdGenerator.new(),
            props.password,
            VERSION_ZERO,
            NO_ATTEMPTS,
            props.emailAddress,
            props.emailVerified
        );
    }

    changePassword(password: string): this {
        this._password = password;
        this._passwordVersion += 1;
        return this;
    }

    logFailedAttempt(): this {
        this._failedAttempts += 1;
        return this;
    }

    resetFailedAttempts(): this {
        this._failedAttempts = 0;
        return this;
    }   

    verifyEmail(): this {
        this._emailVerified = true;
        return this;
    }

    get id(): string {
        return this._id;
    }

    get passwordHash(): string {
        return this._password;
    }

    get passwordVersion(): number {
        return this._passwordVersion;
    }

    get failedAttempts(): number {
        return this._failedAttempts;
    }

    get emailAddress(): string {
        return this._emailAddress;
    }

    get emailVerified(): boolean {
        return this._emailVerified;
    }

    static rehydrate(
        id: string,
        password: string,
        passwordVersion: number,
        failedAttempts: number,
        emailAddress: string,
        emailVerified: boolean
    ): CredentialsAccount {
        return new CredentialsAccount(
            id,
            password,
            passwordVersion,
            failedAttempts,
            emailAddress,
            emailVerified
        );
    }
}