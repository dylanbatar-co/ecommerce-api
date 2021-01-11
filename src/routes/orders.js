const router = require("express").Router();

const {
  getAll,
  detail,
  buyProduct,
} = require("../controllers/order.controller");
const { verifyToken } = require("../middlewares/auth");

router.get("/all", verifyToken, getAll);
router.get("/detail/:id", verifyToken, detail);
router.post("/buy", verifyToken, buyProduct);

module.exports = router;
