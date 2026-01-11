import express from "express";
import "reflect-metadata"
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5"
import { createContext } from "./context";
import { container } from "tsyringe";
import { RedisConnection } from "../redis/redis.connection";
import { resolvers, typeDefs } from "./index"

async function start() {
    const app = express();
    app.use(express.json());

    const redisConnection = container.resolve(RedisConnection);
    redisConnection.connect();

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