import cookie from "cookie";
import type { GraphQLContext } from "../context";
import { AppToGqlMapper } from "../mappers/app-to-gql.mapper";

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
                setCookie(ctx, "session", result.session.token);
            } else if (result.type === "PENDING_LINK") {
                setCookie(ctx, "linkSession", result.linkSession.token);
            }

            return AppToGqlMapper.toGqlLoginResult(result);
        },
    }
}

function setCookie(ctx: GraphQLContext, key: string, value: string): void {
    ctx.res.setHeader(
        "Set-Cookie",
        cookie.serialize(key, value, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24
        })
    );
}