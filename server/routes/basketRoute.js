const Router = require("express");
const router = new Router();
const basketController = require("../controllers/basketController");

router.post("/", basketController.create);
router.post("/delete", basketController.deleteItemFromBasket);
router.get("/", basketController.getBasket);
router.post("/clear", basketController.clearBasket);

module.exports = router;
