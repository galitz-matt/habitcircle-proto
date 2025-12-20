import { IdGenerator } from "@/lib/utils";

const VERSION_ZERO = 0;
const NO_ATTEMPTS = 0;
const NOT_VERIFIED = false;

export class CredentialsAccount {

    private constructor(
        private readonly _id: string,
        private _password: string,
        private _passwordVersion: number,
        private _failedAttempts: number,
        private _emailVerified: boolean
    ) {}

    static create(
        password: string
    ): CredentialsAccount {
        return new CredentialsAccount(
            IdGenerator.new(),
            password,
            VERSION_ZERO,
            NO_ATTEMPTS,
            NOT_VERIFIED
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

    get emailVerified(): boolean {
        return this._emailVerified;
    }

    static rehydrate(
        id: string,
        password: string,
        passwordVersion: number,
        failedAttempts: number,
        emailVerified: boolean
    ): CredentialsAccount {
        return new CredentialsAccount(
            id,
            password,
            passwordVersion,
            failedAttempts,
            emailVerified
        );
    }
}