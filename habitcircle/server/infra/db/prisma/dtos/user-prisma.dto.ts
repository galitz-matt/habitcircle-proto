import type { CredentialsAccountPrismaDto } from "./credentials-account-prisma.dto";
import { OAuthAccountPrismaDto } from "./oauth-account-prisma.dto";

export type UserPrismaDto = {
    id: string;
    createdAt: Date;
    username: string;
    emailAddress: string | null;
    biography: string | null;
    profilePictureKey: string | null;
}

export type UserAggregatePrismaDto = {
    user: UserPrismaDto,
    credentialsAccount: CredentialsAccountPrismaDto | null,
    oauthAccounts: OAuthAccountPrismaDto[]
}