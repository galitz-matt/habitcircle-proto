import { NotFoundError } from "@/lib/errors";
import { Prisma, PrismaClient } from "../generated";
import { AuthenticationWriteModel } from "@/server/application/write-models/authentication.write-model";
import { inject, injectable } from "tsyringe";

@injectable()
export class AuthenticationPrismaWriteModel implements AuthenticationWriteModel {
    constructor(
        @inject(PrismaClient)
        private readonly prisma: PrismaClient
    ) {}
    
    async updateOAuthLastUsed(provider: string, providerAccountId: string): Promise<void> {
        try {
            await this.prisma.oAuthAccount.update({
                where: { provider_providerAccountId: { provider, providerAccountId }},
                data: { lastUsedAt: new Date() }
            });
        } catch (err) {
            if (
                err instanceof Prisma.PrismaClientKnownRequestError && 
                err.code === "P2025"
            ) {
                throw new NotFoundError(
                    `OAuthAccount with provider: '${provider}' and providerAccountId: '${providerAccountId}' not found.`
                );
            }
            throw err;
        }
    }
}