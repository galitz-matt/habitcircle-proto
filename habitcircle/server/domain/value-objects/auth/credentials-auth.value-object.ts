import { Password } from "@/server/domain/value-objects/auth/password.value-object";
import { DomainAuthType } from "@/server/domain/types/auth-type";
import { Authentication } from "./authentication.interface";
import { AuthDto } from "../../dtos/auth/authentication.dto";

export type CredentialsAuthenticationProps = {
    password: Password,
    passwordVersion: number,
    failedAttempts: number,
    emailVerified: boolean
}

const VERSION_ONE = 1;
const NO_ATTEMPTS = 0;
const NOT_VERIFIED = false;

export class CredentialsAuthentication implements Authentication {
    readonly type = DomainAuthType.CREDENTIALS;
    
    private constructor(readonly props: CredentialsAuthenticationProps) {}

    static create(password: Password): CredentialsAuthentication {
        const props: CredentialsAuthenticationProps = {
            password: password,
            passwordVersion: VERSION_ONE,
            failedAttempts: NO_ATTEMPTS,
            emailVerified: NOT_VERIFIED
        }

        return new CredentialsAuthentication(props);
    }

    getAuthInfo(): AuthDto {
        return {
            type: this.type,
            failedAttempts: this.failedAttempts,
            emailVerified: this.emailVerified
        }
    }

    changePassword(hash: string): CredentialsAuthentication {
        const newPassword = Password.fromHash(hash);
        const newVersion = this.passwordVersion + 1;
        return this.clone({ password: newPassword, passwordVersion: newVersion });
    }

    logFailedAttempt(): CredentialsAuthentication {
        return this.clone({ failedAttempts: this.failedAttempts + 1 });
    }

    resetFailedAttempts(): CredentialsAuthentication {
        return this.clone({ failedAttempts: 0 });
    }   

    setEmailVerification(isVerified: boolean): CredentialsAuthentication {
        return this.clone({ emailVerified: isVerified });
    }
    
    verifyPassword(plain: string): boolean {
        return this.password.matches(plain);
    }

    static rehydrate() {

    }

    get password(): Password {
        return this.props.password;
    }

    get passwordVersion(): number {
        return this.props.passwordVersion;
    }

    get failedAttempts(): number {
        return this.props.failedAttempts;
    }

    get emailVerified(): boolean {
        return this.props.emailVerified;
    }

    protected create(props: CredentialsAuthenticationProps): this {
        return new CredentialsAuthentication(props) as this;
    }

    private clone(changes: Partial<CredentialsAuthenticationProps>) {
        return new CredentialsAuthentication({...this.props, ...changes});
    }
}