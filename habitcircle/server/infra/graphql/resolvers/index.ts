import { loginResolvers } from "./login.resolver";

export const resolvers = {
    Mutation: {
        ...loginResolvers.Mutation
    }
}