import { Password } from "@/server/domain/value-objects/auth/password.value-object";
import { DomainAuthType } from "@/server/domain/types/auth-type";
import { Authentication } from "./authentication.interface";
import { AuthenticationDto } from "../dtos/auth/authentication.dto";

const VERSION_ZERO = 0;
const NO_ATTEMPTS = 0;
const NOT_VERIFIED = false;

export class CredentialsAuthentication implements Authentication {
    readonly type = DomainAuthType.CREDENTIALS;
    
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

    getAuthInfo(): AuthenticationDto {
        return {
            type: this.type,
            passwordVersion: this._passwordVersion,
            failedAttempts: this._failedAttempts,
            emailVerified: this._emailVerified
        }
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