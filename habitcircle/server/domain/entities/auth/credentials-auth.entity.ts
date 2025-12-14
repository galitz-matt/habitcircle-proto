const VERSION_ZERO = 0;
const NO_ATTEMPTS = 0;
const NOT_VERIFIED = false;

export class CredentialsAuthentication {
    
    private constructor(
        private _password: string,
        private _passwordVersion: number,
        private _failedAttempts: number,
        private _emailVerified: boolean
    ) {}

    static create(password: string): CredentialsAuthentication {
        return new CredentialsAuthentication(
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

    verifyPassword(password: string): boolean {
        return this._password === password;
    }

    get password(): string {
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
        password: string,
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