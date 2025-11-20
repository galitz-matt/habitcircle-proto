import { Password } from "@/server/domain/value-objects/auth/password.value-object";
import { DomainAuthType } from "@/server/domain/types/auth-type";
import { Authentication } from "./authentication.ac";
import { AuthDto } from "../../dtos/auth/authentication.dto";

export class CredentialsAuthentication extends Authentication {
    readonly type = DomainAuthType.CREDENTIALS;
    
    private constructor(
        readonly password: Password,
        readonly passwordVersion: number,
        readonly failedAttempts: number,
        readonly emailVerified: boolean,
    ) { super() }

    static create(password: Password): CredentialsAuthentication {
        return new CredentialsAuthentication(password, 1, 0, false);
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
    
    async verifyPassword(plain: string): Promise<boolean> {
        return this.password.matches(plain);
    }

    private clone(changes: Partial<CredentialsAuthentication>): CredentialsAuthentication {
        return new CredentialsAuthentication(
            changes.password ?? this.password,
            changes.passwordVersion ?? this.passwordVersion,
            changes.failedAttempts ?? this.failedAttempts,
            changes.emailVerified ?? this.emailVerified
        )
    }
}