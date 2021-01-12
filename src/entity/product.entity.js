const { dbclient } = require("../config/config");

class Product {
  table = "product";
  constructor() {}

  insertProduct(data) {}

  async getProduct(idProduct) {
    try {
      return await dbclient(this.table).where("id", idProduct);
    } catch (error) {
      throw error;
    }
  }

  async getAllProducts() {
    try {
      return await dbclient(this.table).select("*");
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Product;
