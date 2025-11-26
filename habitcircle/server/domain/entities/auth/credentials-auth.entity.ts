import { Password } from "@/server/domain/value-objects/auth/password.value-object";

const VERSION_ZERO = 0;
const NO_ATTEMPTS = 0;
const NOT_VERIFIED = false;

export class CredentialsAuthentication {
    
    private constructor(
        private _password: Password,
        private _passwordVersion: number,
        private _failedAttempts: number,
        private _emailVerified: boolean
    ) {}

    static create(password: Password): CredentialsAuthentication {
        return new CredentialsAuthentication(
            password,
            VERSION_ZERO,
            NO_ATTEMPTS,
            NOT_VERIFIED
        );
    }

    changePassword(hash: string): this {
        this._password = Password.fromHash(hash);
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

    verifyPassword(password: Password): boolean {
        return this._password.equals(password);
    }

    static rehydrate(
        password: Password,
        passwordVersion: number,
        failedAttempts: number,
        emailVerified: boolean
    ): CredentialsAuthentication {
        return new CredentialsAuthentication(
            password,
            passwordVersion,
            failedAttempts,
            emailVerified
        )
    }

}