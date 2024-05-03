const Router = require('express')
const UserController = require("../controllers/UserController")

const UserRoutes = new Router();

UserRoutes.post("/addPoints", UserController.addPoints)

module.exports = {UserRoutes}