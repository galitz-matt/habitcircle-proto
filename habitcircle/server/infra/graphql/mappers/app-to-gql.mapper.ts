import type { LoginResult } from "@/server/application/dtos/results/login.result";
import { GqlLoginResult } from "../types/auth/login-result.graphql";
import { ResolveSessionResult } from "@/server/application/dtos/results/resolve-session.result";
import { GqlMeResult } from "../types/auth/me-result.graphql";

export class AppToGqlMapper {
    static toGqlLoginResult(result: LoginResult): GqlLoginResult {
        switch (result.type) {
            case "SUCCESS":
                return {
                    __typename: "LoginSuccess",
                    userId: result.session.userId
                };
            case "INVALID_CREDENTIALS":
                return {
                    __typename: "InvalidCredentials",
                    reason: "Invalid username or password",
                };
            case "PENDING_LINK":
                return {
                    __typename: "PendingLink",
                    allowedProviders: result.linkSession.allowedProviders
                };
            default:
                throw new Error(`Unhandle LoginResult: ${result.type}`);
        }
    }

    static toGqlMeResult(result: ResolveSessionResult): GqlMeResult {
        switch (result.type) {
            case "SUCCESS":
                return {
                    __typename: "Authenticated",
                    userId: result.userId
                }
            case "INVALID_TOKEN":
                return {
                    __typename: "Unauthenticated",
                    reason: "Invalid session token"
                }
        }
    }
}