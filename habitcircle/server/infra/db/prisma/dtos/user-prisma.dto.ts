import type { CredentialsAccountPrismaDto } from "./credentials-account-prisma.dto";
import { OAuthAccountPrismaDto } from "./oauth-account-prisma.dto";

export type UserPrismaDto = {
    scalars: {
        id: string;
        username: string;
        emailAddress?: string;
        biography?: string;
        profilePictureKey?: string;
    }
    credentialsAccount?: CredentialsAccountPrismaDto
    oauthAccounts: OAuthAccountPrismaDto[]
}