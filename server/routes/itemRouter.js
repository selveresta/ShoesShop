const Router = require("express");
const router = new Router();
const itemController = require("../controllers/itemController");
const checkRole = require("../middleware/checkRoleMiddleWare");

router.post("/", checkRole("ADMIN"), itemController.create);
router.post("/delete", checkRole("ADMIN"), itemController.delete);
router.get("/", itemController.getAll);
router.get("/:id", itemController.getOne);

module.exports = router;
