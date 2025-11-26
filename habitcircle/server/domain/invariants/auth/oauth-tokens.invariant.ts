import { DomainError } from "@/lib/errors";

export class OAuthTokensInvariants {
    static enforce(
        accessToken?: string,
        refreshToken?: string,
        expiresAt?: Date
    ): void {
        if (!!expiresAt) 
            this.ensureNotExpired(expiresAt);
    }

    static ensureNotExpired(expiresAt: Date): void {
        if (expiresAt <= new Date())
            throw new DomainError("Token cannot be expired")
    }
}