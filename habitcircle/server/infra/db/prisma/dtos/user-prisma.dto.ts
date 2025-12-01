export type UserPrismaDto = {
    id: string;
    createdAt: Date;
    username: string;
    emailAddress: string | null;
    biography: string | null;
    profilePictureKey: string | null;
}