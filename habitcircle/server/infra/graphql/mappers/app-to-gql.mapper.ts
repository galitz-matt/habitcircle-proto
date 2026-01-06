import type { LoginResult } from "@/server/application/dtos/results/login.result";
import { GqlLoginResult } from "../types/login-result.graphql";

export class AppToGqlMapper {
    static toGqlLoginResult(result: LoginResult): GqlLoginResult | null {
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
            // TODO: review this, should token be set in cookies, return allowedProviders?
            // - check w/ Chat
            // - update resolver & schema
            case "PENDING_LINK":
                return {
                    __typename: "PendingLink",
                    linkSession: result.linkSession
                };
            default:
                throw new Error(`Unhandle LoginResult: ${result.type}`);
        }
    }
}