const { getRoleList, updateRoleById } = require('../files/role.file')

class Role {
    getRoleList(ctx, next) {
        const list = getRoleList()

        ctx.body = {
            message: 'ok',
            code: 0,
            data: list
        }
    }

    updateRole(ctx, next) {
        const { id, ...data } = ctx.request.body

        const res = updateRoleById(id, data)

        ctx.body = {
            message: 'OK',
            code: 0,
            data: res
        }
    }

}

module.exports = new Role()