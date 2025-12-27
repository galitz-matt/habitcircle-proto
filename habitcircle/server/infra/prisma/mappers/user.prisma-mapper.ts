import { User } from "@/server/domain/entities/user.entity";
import { 
    User as UserRecord,
    OAuthAccount as OAuthAccountRecord,
    CredentialsAccount as CredentialsAccountRecord,
} from "@/prisma/generated";
import { UserPrismaDto } from "../dtos/user-prisma.dto";
import { Username } from "@/server/domain/value-objects/user/username.value-object";
import { Biography } from "@/server/domain/value-objects/user/biography.value-object";
import { OAuthAccountPrismaMapper } from "./oauth-account.prisma-mapper";
import { CredentialsAccountPrismaMapper } from "./credentials-account.prisma-mapper";
import { CircleMember } from "@/server/domain/value-objects/circle/circle-member.value-object";
import { UserProfile } from "@/server/domain/value-objects/user/user-profile.value-object";
import { UserAuthentication } from "@/server/domain/entities/auth/user-authentication.entity";
import { OAuthAccountManager } from "@/server/domain/value-objects/auth/oauth-account-manager.value-object";


type UserPrismaRecord = UserRecord & {
    oauthAccounts: OAuthAccountRecord[],
    credentialsAccount: CredentialsAccountRecord | null
}

export class UserPrismaMapper {
    static toDomain(record: UserPrismaRecord): User {
        const profile = UserProfile.rehydrate(
            Username.rehydrate(record.username),
            record.biography
                ? Biography.rehydrate(record.biography)
                : undefined,
            record.profilePictureKey ?? undefined
        );

        const auth = UserAuthentication.rehydrate(
            record.credentialsAccount
                ? CredentialsAccountPrismaMapper.toDomain(record.credentialsAccount)
                : undefined,
            OAuthAccountManager.rehydrate(
                record.oauthAccounts.map(oa => OAuthAccountPrismaMapper.toDomain(oa))
            )
        );

        return User.rehydrate(
            record.id,
            record.createdAt,
            profile,
            auth
        );
    }

    static toPersistence(user: User): UserPrismaDto {
        return {
            scalars: {
                id: user.id,
                username: user.username.toString(),
                biography: user.biography?.toString(),
                profilePictureKey: user.profilePictureKey,
            },
            credentialsAccount: user.credentialsAccount
                ? CredentialsAccountPrismaMapper.toPersistence(user.credentialsAccount)
                : undefined,
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