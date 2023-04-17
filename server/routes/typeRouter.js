const Router = require("express");
const router = new Router();
const typeController = require("../controllers/typeController");

const checkRole = require("../middleware/checkRoleMiddleWare");

router.post("/", checkRole("ADMIN"), typeController.create);
router.get("/", typeController.getAll);
router.delete("/", checkRole("ADMIN"), typeController.delete);
router.get("/:id", typeController.getOne);

module.exports = router;
