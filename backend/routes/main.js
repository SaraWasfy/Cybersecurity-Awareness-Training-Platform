const Router = require("express");
const { SignUpRoutes } = require("../routes/SignUpRoutes");
const { LogInRoutes } = require("../routes/LogInRoutes");
const { UserRoutes } = require("../routes/UserRoutes");

const router = new Router();
router.use("/signup", SignUpRoutes);
router.use("/login", LogInRoutes);
router.use("/account", UserRoutes);
module.exports = { router };