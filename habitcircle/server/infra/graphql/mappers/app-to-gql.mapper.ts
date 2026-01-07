import type { LoginResult } from "@/server/application/dtos/results/login.result";
import { GqlLoginResult } from "../types/login-result.graphql";

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
}