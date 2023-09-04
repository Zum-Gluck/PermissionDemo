const router = require('koa-router')
const roleRouter = new router({ prefix: '/role' })

const { getRoleList, updateRole } = require('../controllers/role.controller')
const { verifyToken } = require('../middleware/auth.middleware')


roleRouter.get('/list', verifyToken, getRoleList)

roleRouter.post('/update', verifyToken, updateRole)



module.exports = roleRouter
