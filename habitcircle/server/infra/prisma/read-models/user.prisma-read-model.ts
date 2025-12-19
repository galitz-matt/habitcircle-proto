import { UserReadModel } from "@/server/application/read-models/user.read-model";
import { PrismaClient } from "../generated";
import { User } from "@/server/domain/entities/user.entity";
import { UserPrismaMapper } from "../mappers/user.prisma-mapper";
import { OAuthIdentity } from "@/server/domain/value-objects/auth/oauth-identity.value-object";

export class UserPrismaReadModel implements UserReadModel {
    constructor(private readonly prisma: PrismaClient) {}

    async findUserByEmailAddress(emailAddress: string): Promise<User | null> {
        const user = await this.prisma.user.findUnique({
            where: { emailAddress },
            include: { oauthAccounts: true, credentialsAccount: true }
        });
        
        return user ? UserPrismaMapper.toDomain(user) : null;
    }

    async findUserByOAuthIdentity(oauthIdentity: OAuthIdentity): Promise<User | null> {
        const account = await this.prisma.oAuthAccount.findUnique({
            where: { 
                provider_providerAccountId: {
                    provider: oauthIdentity.provider,
                    providerAccountId: oauthIdentity.providerAccountId
                }
            },
            select: {
                user: {
                    include: { oauthAccounts: true, credentialsAccount: true }
                }
            }
        });

        return account?.user ? UserPrismaMapper.toDomain(account.user) : null;
    }
}