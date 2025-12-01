import { User } from "@/server/domain/entities/user.entity";
import { User as UserRecord } from "@/prisma/generated";
import type { Prisma } from "@/prisma/generated";
import { UserAggregatePrismaDto, UserPrismaDto } from "../dtos/user-prisma.dto";
import { Username } from "@/server/domain/value-objects/username.value-object";
import { Biography } from "@/server/domain/value-objects/biography.value-object";
import { OAuthAccountPrismaMapper } from "./oauth-account.prisma-mapper";
import { CredentialsAccountPrismaMapper } from "./credentials-account.prisma-mapper";
import { CircleMember } from "@/server/domain/value-objects/circle/circle-member.value-object";

type UserRecordWithRelations = Prisma.UserGetPayload<{
    include: { credentialsAccount: true, oauthAccounts: true }
}>

export class UserPrismaMapper {
    static toDomain(record: UserRecordWithRelations): User {
        const oauthAccounts = record.oauthAccounts.map(
            oa => OAuthAccountPrismaMapper.toDomain(oa)
        );

        const credentialsAccount = record.credentialsAccount 
            ? CredentialsAccountPrismaMapper.toDomain(record.credentialsAccount)
            : undefined;

        return User.rehydrate(
            record.id,
            record.createdAt,
            Username.rehydrate(record.username),
            oauthAccounts,
            record.emailAddress ?? undefined,
            record.biography ? Biography.rehydrate(record.biography) : undefined,
            record.profilePictureKey ?? undefined,
            credentialsAccount
        );
    }

    static toPersistence(user: User): UserAggregatePrismaDto {
        return {
            user: <UserPrismaDto> {
                id: user.id,
                createdAt: user.createdAt,
                username: user.username.toString(),
                emailAddress: user.emailAddress ?? null,
                biography: user.biography?.toString() ?? null,
                profilePictureKey: user.profilePictureKey ?? null,
            },
            credentialsAccount: user.credentialsAccount
                ? CredentialsAccountPrismaMapper.toPersistence(user.credentialsAccount)
                : null,
            oauthAccounts: user.oauthAccounts.map(
                oa => OAuthAccountPrismaMapper.toPersistence(oa)
            )
        };
    }

    static toCircleMember(record: UserRecord): CircleMember {
        return CircleMember.rehydrate(
            record.id,
            Username.rehydrate(record.username),
            record.profilePictureKey ?? undefined
        )
    }
}