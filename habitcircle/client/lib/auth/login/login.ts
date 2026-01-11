import { LoginResult, LoginWithCredentialsDocument, LoginWithCredentialsMutation, LoginWithCredentialsMutationVariables } from "@/generated/graphql";
import { graphqlFetch } from "../../graphql/client";

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
    return res.loginWithCredentials;
}