import { UserReadModel } from "@/server/application/read-models/user.read-model";
import { PrismaClient } from "../generated";
import { User } from "@/server/domain/entities/user.entity";
import { UserPrismaMapper } from "../mappers/user.prisma-mapper";
import { inject, injectable } from "tsyringe";

@injectable()
export class UserPrismaReadModel implements UserReadModel {
    constructor(
        @inject(PrismaClient)
        private readonly prisma: PrismaClient
    ) {}

    async findUsersByVerifiedOAuthEmailAddress(emailAddress: string): Promise<User[]> {
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

    async findUserByOAuthIdentity(provider: string, providerAccountId: string): Promise<User | null> {
        const account = await this.prisma.oAuthAccount.findUnique({
            where: { 
                provider_providerAccountId: {
                    provider,
                    providerAccountId
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