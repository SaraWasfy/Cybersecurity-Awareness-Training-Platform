const Router = require('express')
const UserController = require("../controllers/UserController")

const LogInRoutes = new Router();

LogInRoutes.post("/", UserController.login)

module.exports = {LogInRoutes}