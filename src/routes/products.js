const router = require("express").Router();

const {
  getProduct,
  getAll,
  loadProductCSV,
} = require("../controllers/product.controller");

router.get("/product/all", getAll);
router.get("/product/:id", getProduct);
router.get("/load", loadProductCSV);

module.exports = router;
