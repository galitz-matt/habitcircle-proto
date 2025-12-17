import { HashingService } from "@/server/application/services/hashing.service";
import bcrypt from "bcryptjs"

export class BcryptHashingService implements HashingService {
    constructor(readonly salt: number) {}

    async hash(s: string): Promise<string> {
        return await bcrypt.hash(s, this.salt);
    }

    async compare(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash);
    }
}