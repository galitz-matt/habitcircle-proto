import { DomainAuthType } from "@/server/domain/types/auth-type";
import { AuthenticationDto } from "../dtos/auth/authentication.dto";

export interface Authentication {
    readonly type: DomainAuthType
    getAuthInfo(): AuthenticationDto
}