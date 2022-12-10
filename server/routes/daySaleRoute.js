const Router = require("express");
const router = new Router();
const daySaleController = require("../controllers/daySaleController");
const checkRole = require("../middleware/checkRoleMiddleWare");

router.post("/", checkRole("ADMIN"), daySaleController.create);
router.get("/", daySaleController.getAll);

module.exports = router;
