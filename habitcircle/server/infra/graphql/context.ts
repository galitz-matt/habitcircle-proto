import type { Request, Response } from "express";
import cookie from "cookie"
import { container }from "@/server/dependency-injection/container";
import { AuthenticationService } from "@/server/application/services/authentication.service"
import { SessionService } from "@/server/application/services/session.service";

export interface AuthContext {
    userId: string | null;
    sessionToken: string | null;
    requireUserId(): string;
}

export interface GraphQLContext {
    req: Request;
    res: Response;
    auth: AuthContext;
    authService: AuthenticationService
}

export async function createContext(
    req: Request,
    res: Response
): Promise<GraphQLContext> {
    const rawCookie = req.headers.cookie;
    const cookies = rawCookie ? cookie.parse(rawCookie) : {};
    const sessionToken = cookies.session ?? null;

    const sessionService = container.resolve(SessionService);
    const authenticationService = container.resolve(AuthenticationService);

    let userId: string | null = null;

    if (sessionToken) {
        const result = await sessionService.resolveSession(sessionToken);
        if (result.type === "SUCCESS") {
            userId = result.userId;
        }
    }

    return {
        req,
        res,
        auth: {
            userId,
            sessionToken,
            requireUserId() {
                if (!userId) {
                    throw new Error("UNAUTHENTICATED")
                }
                return userId;
            }
        },
        authService: authenticationService
    };
}