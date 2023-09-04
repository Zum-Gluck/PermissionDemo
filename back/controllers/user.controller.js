const errorTypes = require('../constants/error-types')
const jwt = require('jsonwebtoken')
const jwtSecret = 'asdasdads'

// 文件操作
const { getUserByUserName, getUserPermissonByRoleID } = require('../files/user.file')

class User {
    login(ctx, next) {
        const { username, password } = ctx.request.body

        const userInfo = getUserByUserName(username)

        if (!userInfo) {
            const error = new Error(errorTypes.USER_DOES_NOT_EXISTS)
            return ctx.app.emit('error', error, ctx)
        }

        if (password.toString() !== userInfo.password.toString()) {
            const error = new Error(errorTypes.PASSWORD_IS_INCORRENT)
            return ctx.app.emit('error', error, ctx)
        }

        // 走到这里密码正确生成token
        const token = jwt.sign({ username: username }, jwtSecret, {
            algorithm: 'HS256',
            expiresIn: 10000,
        })

        // 获取user对应的权限
        const { roleId } = userInfo
        const permission = getUserPermissonByRoleID(roleId)

        ctx.body = {
            code: 0,
            message: 'ok',
            data: {
                username,
                roleId,
                token,
                permission
            }
        }
    }

    getUserInfo(ctx, next) {
        const username = ctx.username

        const userInfo = getUserByUserName(username)

        const { roleId } = userInfo
        const permission = getUserPermissonByRoleID(roleId)

        ctx.body = {
            code: 0,
            message: 'ok',
            data: {
                username,
                roleId,
                permission
            }
        }

    }
}

module.exports = new User()