const Product = require("../../entity/product.entity");

const product = new Product();

const rootResolver = {
  getAllProducts: async () => {
    return await product.getAllProducts();
  },
  getProduct: async ({ id }) => {
    const [result] = await product.getProduct(id);
    return result;
  },
};

module.exports = rootResolver;
