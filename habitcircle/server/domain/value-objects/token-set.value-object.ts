
export class TokenSet {
    private constructor(
        private readonly accessToken: string,
        private readonly refreshToken?: string,
        private readonly expiresAt?: Date
    ) {}

}