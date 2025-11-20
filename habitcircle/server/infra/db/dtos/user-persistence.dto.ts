export type UserPersistenceDto = {
    id: string,
    createdAt: Date,
    username: string,
    emailAddress: string | null,
    biography: string | null,
    profilePictureKey: string | null
}