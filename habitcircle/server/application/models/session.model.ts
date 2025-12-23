export type Session = {
    token: string;
    userId: string;
    issuedAt: string; // ISO string
    expiresAt: string; // ISO string
}