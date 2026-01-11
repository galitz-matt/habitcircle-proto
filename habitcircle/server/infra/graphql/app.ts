import express from "express";
import "reflect-metadata"
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5"
import { createContext } from "./context";
import { resolvers, typeDefs } from "./index"
import { initInfra } from "../init";

async function start() {
    const app = express();
    app.use(express.json());

    await initInfra();

    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    await server.start();

    app.use(
        "/graphql",
        expressMiddleware(server, {
            context: async ({ req, res }) => createContext(req, res)
        })
    );

    app.listen(4000, () => {
        console.log("GraphQL running at http://localhost:4000/graphql");
    });
}

start();