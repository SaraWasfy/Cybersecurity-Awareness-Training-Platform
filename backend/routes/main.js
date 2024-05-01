const Router = require("express");
const { SignUpRoutes } = require("../routes/SignUpRoutes");
const { LogInRoutes } = require("../routes/LogInRoutes");

const router = new Router();
router.use("/signup", SignUpRoutes);
router.use("/login", LogInRoutes);
module.exports = { router };