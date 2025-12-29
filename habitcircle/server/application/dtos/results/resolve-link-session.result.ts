export type ResolveLinkSessionResult =
    | { 
        type: "SUCCESS", 
        allowedProviders: string[]
    }
    | { type: "NOT_FOUND" }