import "reflect-metadata"
import { makeExecutableSchema } from '@graphql-tools/schema'
import { buildTypeDefsAndResolversSync } from "type-graphql";
import { NextApiRequest, NextApiResponse } from "next";
import { createServer } from "@graphql-yoga/node";
import Resolvers from "lib/graph";

const { typeDefs, resolvers } = buildTypeDefsAndResolversSync({
  resolvers: Resolvers,
});

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = createServer<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema: schema,
  context: ({ req, res }: { req: NextApiRequest; res: NextApiResponse }) => ({
    req,
    res,
  }),
});

export default server;
