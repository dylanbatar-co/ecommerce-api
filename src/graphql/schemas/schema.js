const { buildSchema } = require("graphql");

const rootSchema = buildSchema(
  `
		type Query{
			hello:String
		}
	`
);

module.exports = rootSchema;
