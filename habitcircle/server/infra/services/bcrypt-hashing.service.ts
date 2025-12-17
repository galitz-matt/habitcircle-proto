import bcrypt from "bcryptjs"

export class BcryptHashingService {
    constructor(readonly salt: number) {}

    async hash(s: string): Promise<string> {
        return await bcrypt.hash(s, this.salt);
    }

    async compare(hash1: string, hash2: string): Promise<boolean> {
        return await bcrypt.compare(hash1, hash2);
    }
}