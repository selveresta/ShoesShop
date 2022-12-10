const Router = require("express");
const router = new Router();
const UserController = require("../controllers/userController");
const authMiddleWare = require("../middleware/authMiddleware");

router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.get("/auth", authMiddleWare, UserController.check);

module.exports = router;
