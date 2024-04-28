const Router = require("express");
const { SignUpRoutes } = require("../routes/SignUpRoutes");

const router = new Router();
router.use("/signup", SignUpRoutes);
module.exports = { router };