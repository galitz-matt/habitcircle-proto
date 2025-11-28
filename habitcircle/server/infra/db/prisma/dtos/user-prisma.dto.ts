export type UserPrismaDto = {
    id: string,
    username: string,
    emailAddress: string | null,
    biography: string | null,
    profilePictureKey: string | null
}