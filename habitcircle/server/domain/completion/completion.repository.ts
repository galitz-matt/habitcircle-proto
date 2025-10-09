import { Completion } from "./completion";

export interface CompletionRepository {
    save(completion: Completion): Promise<void>
    delete(completion: Completion): Promise<void>
}