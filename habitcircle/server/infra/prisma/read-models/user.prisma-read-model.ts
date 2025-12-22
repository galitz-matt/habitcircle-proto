import { UserReadModel } from "@/server/application/read-models/user.read-model";
import { PrismaClient } from "../generated";
import { User } from "@/server/domain/entities/user.entity";
import { UserPrismaMapper } from "../mappers/user.prisma-mapper";
import { OAuthIdentity } from "@/server/domain/value-objects/auth/oauth-identity.value-object";

export class UserPrismaReadModel implements UserReadModel {
    constructor(private readonly prisma: PrismaClient) {}

    async findUsersByOAuthEmailAddress(emailAddress: string): Promise<User[]> {
        const users = await this.prisma.user.findMany({
            where: {
                oauthAccounts: {
                    some: {
                        emailAddress,
                        emailVerified: true
                    }
                }
            },
            include: { credentialsAccount: true, oauthAccounts: true }
        })

        return users.map(u => UserPrismaMapper.toDomain(u));
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