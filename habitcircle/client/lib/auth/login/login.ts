import { LoginResult, LoginWithCredentialsDocument, LoginWithCredentialsMutation, LoginWithCredentialsMutationVariables } from "@/generated/graphql";
import { graphqlFetch } from "../../graphql/client";
import { AuthGqlToDomainMapper } from "../auth.mapper";

export async function loginWithCredentials(
    username: string,
    password: string
): Promise<LoginResult> {
    const res = await graphqlFetch<
        LoginWithCredentialsMutation,
        LoginWithCredentialsMutationVariables
    >(LoginWithCredentialsDocument, {
        input: {
            username,
            password
        },
    });
    return AuthGqlToDomainMapper.toLoginResult(res.loginWithCredentials);
}