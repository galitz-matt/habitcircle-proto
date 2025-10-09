import { Completion } from "./completion";

export interface CompletionRepository {
    save(completion: Completion): Promise<void>
    delete(id: string): Promise<void>
}