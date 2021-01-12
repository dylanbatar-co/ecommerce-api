const { buildSchema } = require("graphql");

const rootSchema = buildSchema(
  `
	type Query {
		getAllProducts: [Product]
		getProduct(id:String): Product
	}

	type Product {
		id:ID
		name:String
		categories:String
		retail_price:Int
		discounted_price:Int
		description: String
		raiting: String
		brand: String
		Image: [String]
	}
	`
);

module.exports = rootSchema;
