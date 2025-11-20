import { DomainAuthType } from "@/server/domain/types/auth-type";
import { AuthDto } from "../../dtos/auth/authentication.dto";

export interface Authentication {
    readonly type: DomainAuthType
    getAuthInfo(): AuthDto
}