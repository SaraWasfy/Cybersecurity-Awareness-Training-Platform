const Router = require('express')
const UserController = require("../controllers/UserController")

const UserRoutes = new Router();

UserRoutes.post("/addPoints", UserController.addPoints)
UserRoutes.post("/addtrophie", UserController.addtrophie)
UserRoutes.get("/getTrophie", UserController.getTrophie)
UserRoutes.post("/addspot100", UserController.addspot100)
UserRoutes.get("/getspot100", UserController.getspot100)
UserRoutes.post("/addstar", UserController.addstar)
UserRoutes.get("/getstar", UserController.getstar)
UserRoutes.post("/addquiz100", UserController.addquiz100)
UserRoutes.get("/getquiz100", UserController.getquiz100)

module.exports = {UserRoutes}