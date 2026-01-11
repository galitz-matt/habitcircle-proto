import { 
    LoginResult as GqlLoginResult, 
    MeResult as GqlMeResult
} from "@/generated/graphql";
import { LoginResult, MeState } from "./types";

export class AuthGqlToDomainMapper {
    static toLoginResult(result: GqlLoginResult): LoginResult {
        switch(result.__typename) {
            case "LoginSuccess":
                return {
                    status: "success",
                    userId: result.userId
                };
            case "LoginFailure":
                return {
                    status: "failure",
                    reason: result.reason
                };
            case "PendingLink": {
                return {
                    status: "pendingLink",
                    allowedProviders: result.allowedProviders
                }
            }
            default: {
                throw new Error(`Unhandled GraphQL LoginResult: ${result.__typename}`);
            }
        }
    }

    static toMeState(result: GqlMeResult): MeState {
        switch(result.__typename) {
            case "Authenticated":
                return {
                    status: "authenticated",
                    userId: result.userId
                };
            case "Unauthenticated":
                return {
                    status: "unauthenticated",
                    reason: result.reason
                };
            default:
                throw new Error(`Unhandled GraphQL MeResult: ${result.__typename}`);
        }
    }
}