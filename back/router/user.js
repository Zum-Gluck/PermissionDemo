const router = require('koa-router')
const loginRouter = new router()


const { verifyLogin, verifyToken } = require('../middleware/auth.middleware')
const { login, getUserInfo } = require('../controllers/user.controller.js')


loginRouter.post('/login', verifyLogin, login)

loginRouter.get('/userinfo', verifyToken, getUserInfo)

module.exports = loginRouter
