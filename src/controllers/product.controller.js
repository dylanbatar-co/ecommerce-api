const path = require("path");
const Product = require("../entity/product.entity");
const { readCSV } = require("../utils/utils");

const products = new Product();

const getAll = async (req, res) => {
  const result = await products.getAllProducts();
  res.json({ ok: true, data: result });
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const result = await products.getProduct(id);
  res.json({ ok: true, data: result });
};

const loadProductCSV = async (req, res) => {
  const result = await readCSV(path.join(__dirname, "/../assets/products.csv"));
  console.log(result);
  res.send("ok");
};

module.exports = {
  getAll,
  getProduct,
  loadProductCSV,
};
