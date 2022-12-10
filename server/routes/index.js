const Router = require("express");
const router = new Router();

const itemRouter = require("./itemRouter");
const typeRouter = require("./typeRouter");
const brandRouter = require("./brandRouter");
const userRouter = require("./userRouter");
const daySaleRouter = require("./daySaleRoute");
const ratingRoute = require("./ratingRoute");
const basketRoute = require("./basketRoute");

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/item", itemRouter);
router.use("/daySale", daySaleRouter);
router.use("/rating", ratingRoute);
router.use("/basket", basketRoute);

module.exports = router;
