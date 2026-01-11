import { GraphQLContext } from "../context";
import { AppToGqlMapper } from "../mappers/app-to-gql.mapper";
import { GqlLoginResult } from "../types/auth/login-result.graphql";
import cookie from "cookie"
import { GqlMeResult, GqlUnauthenticatedNoTokenProvided } from "../types/auth/me-result.graphql";

export const authResolvers = {
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
        ): Promise<GqlLoginResult> => {
            const result = await ctx.services.authentication.loginWithCredentials(
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
    },
    Query: {
            me: async (
                _: unknown,
                __: unknown,
                ctx: GraphQLContext
            ): Promise<GqlMeResult> => {
                if (!ctx.auth.sessionToken) return GqlUnauthenticatedNoTokenProvided
                const result = await ctx.services.session.resolveSession(ctx.auth.sessionToken);
                return AppToGqlMapper.toGqlMeResult(result);
            }
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