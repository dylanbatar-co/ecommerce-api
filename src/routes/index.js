const router = require("express")();

router.use(require("./products"));
router.use(require("./orders"));
router.use(require("./auth"));

module.exports = router;
