const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const express = require("express");
const rootSchema = require("./graphql/schemas/schema");
const rootResolver = require("./graphql/resolvers/resolver");
const app = express();

require("./config/config");

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// Routes
app.use(
  "/graphql",
  graphqlHTTP({
    schema: rootSchema,
    rootValue: rootResolver,
    graphiql: true,
  })
);
app.use("/api/v1", require("./routes/index"));

// Running server
app.listen(process.env.PORT, () => {
  console.log(`Running server on Port: ${process.env.PORT}`);
});
