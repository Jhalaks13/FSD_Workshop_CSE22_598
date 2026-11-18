
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Create Express application
const app = express();

// Define GraphQL schema
const schema = buildSchema(`
    type Query {
        hello: String
        welcome(name: String): String
    }
`);

// Define resolver functions
const root = {
    hello: () => {
        return "Hello World! Welcome to GraphQL API.";
    },

    welcome: (args) => {
        return "Welcome " + args.name + "!";
    }
};

// Configure GraphQL endpoint
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

// Start server
app.listen(4000, () => {
    console.log('GraphQL Server running at http://localhost:4000/graphql');
});
