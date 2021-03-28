import { ApolloServer, gql } from "apollo-server-micro";
import { makeExecutableSchema } from "graphql-tools";
import { MongoClient } from "mongodb";
// import typeDefs from "../../src/graphql/schema.graphql";
// import resolvers from "../../src/graphql/resolvers";

const typeDefs = gql`
  type Todo {
    _id: ID!
    completed: Boolean!
    description: String!
  }
  type Query {
    todo(_id: ID!): Todo!
    todos: [Todo]!
  }
`;

const resolvers = {
  Query: {
    todo(_parent, _args, _context, _info, _id) {
      return _context.db
        .collection("todos")
        .findOne(_id)
        .then((data) => {
          return data;
        });
    },
    todos(_parent, _args, _context, _info) {
      return _context.db
        .collection("todos")
        .find({})
        .toArray()
        .then((data) => {
          return data;
        });
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

let db;

const apolloServer = new ApolloServer({
  schema,
  context: async () => {
    if (!db) {
      try {
        const dbClient = new MongoClient(process.env.DATABASE_DATA_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

        if (!dbClient.isConnected()) await dbClient.connect();
        db = dbClient.db("data");
      } catch (e) {
        console.log("--->error while connecting with graphql context (db)", e);
      }
    }

    return { db };
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
