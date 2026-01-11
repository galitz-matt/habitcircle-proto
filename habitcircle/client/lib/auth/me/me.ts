import { MeResult, MeQuery, MeQueryVariables, MeDocument } from "@/generated/graphql";
import { graphqlFetch } from "@/lib/graphql/client";
import { AuthGqlToDomainMapper } from "../auth.mapper";

export async function me(): Promise<MeResult> {
    const res = await graphqlFetch<MeQuery, MeQueryVariables>(MeDocument, {});
    return AuthGqlToDomainMapper.toMeState(res.me);
}