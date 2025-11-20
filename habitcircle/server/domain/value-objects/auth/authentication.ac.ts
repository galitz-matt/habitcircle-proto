import { DomainAuthType } from "@/server/domain/types/auth-type";
import { AuthDto } from "../../dtos/auth/authentication.dto";

export abstract class Authentication {
    abstract readonly type: DomainAuthType
    
    abstract getAuthInfo(): AuthDto
}