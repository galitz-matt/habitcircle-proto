import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { authModule } from "./auth";

const modules = [
    authModule,
];

export const typeDefs = mergeTypeDefs(
    modules.map(m => m.typeDefs)
);

export const resolvers = mergeResolvers(
    modules.map(m => m.resolvers)
);