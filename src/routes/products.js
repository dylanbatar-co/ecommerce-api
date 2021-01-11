const router = require("express").Router();

const { getProduct, getAll } = require("../controllers/product.controller");

router.get("/all", getAll);
router.get("/:id", getProduct);

module.exports = router;
