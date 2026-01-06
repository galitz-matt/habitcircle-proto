import cookie from "cookie";
import type { GraphQLContext } from "../context";
import { AppToGqlMapper } from "../mappers/app-to-gql.mapper";
import { GqlLoginResult } from "../types/login-result.graphql";

export const loginResolvers = {
    Mutation: {
        loginWithCredentials: async (
            _: unknown,
            args: {
                input: {
                    username: string;
                    password: string;
                };
            },
            ctx: GraphQLContext
        ) => {
            const result = await ctx.authService.loginWithCredentials(
                args.input.username,
                args.input.password
            );

            if (result.type === "SUCCESS") {
                ctx.res.setHeader(
                    "Set-Cookie",
                    cookie.serialize("session", result.session.token, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV === "production",
                        sameSite: "lax",
                        path: "/",
                        maxAge: 60 * 60 * 24
                    })
                );
            }

            return AppToGqlMapper.toGqlLoginResult(result);
        },
    }
}