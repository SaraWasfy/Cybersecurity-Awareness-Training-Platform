const Router = require('express')
const UserController = require('../controllers/UserController')

const SignUpRoutes = new Router();

SignUpRoutes.post('/', UserController.signup)

module.exports = {SignUpRoutes}