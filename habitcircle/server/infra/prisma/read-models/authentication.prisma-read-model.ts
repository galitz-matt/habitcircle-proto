import { AuthenticationCredentialsView } from "@/server/application/dtos/views/auth-credentials.view";
import { AuthenticationReadModel } from "@/server/application/read-models/authentication.read-model";
import { PrismaClient } from "@/prisma/generated";
import { injectable, inject } from "tsyringe";

@injectable()
export class AuthenticationPrismaReadModel implements AuthenticationReadModel {
    constructor(
        @inject(PrismaClient)
        private readonly prisma: PrismaClient
    ) {}

    async findAuthenticationCredentialsByUsername(username: string): Promise<AuthenticationCredentialsView | null> {
        const queryResults = await this.prisma.user.findUnique({
            where: { username },
            select: {
                id: true,
                credentialsAccount: {
                    select: {
                        hashedPassword: true,
                        failedAttempts: true,
                    }
                }
            }
        });

        return (queryResults && queryResults.credentialsAccount)
            ? {
                userId: queryResults.id,
                failedAttempts: queryResults.credentialsAccount.failedAttempts,
                hashedPassword: queryResults.credentialsAccount.hashedPassword
            }
            : null;
    }
}