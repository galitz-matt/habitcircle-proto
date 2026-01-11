import path from "path";
import { authResolvers } from "./auth.resolvers";
import { loadFilesSync } from "@graphql-tools/load-files";

const typeDefs = loadFilesSync(
    path.join(__dirname, "*.graphql")
);

export const authModule = {
  typeDefs,
  resolvers: authResolvers,
};