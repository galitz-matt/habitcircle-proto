export interface HashingService {
    hash(s: string): Promise<string>;
    compare(hash1: string, hash2: string): Promise<boolean>;
}
