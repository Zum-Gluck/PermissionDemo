const errorTypes = require('../constants/error-types')
const jwt = require('jsonwebtoken')
const jwtSecret = 'asdasdads'

const verifyLogin = (ctx, next) => {
  const { username, password } = ctx.request.body

  if (!username || !password) {
    const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }

  next()
}


const verifyToken = (ctx, next) => {
  const token = ctx.header.token
  if (!token) {
    const error = new Error(errorTypes.UNAUTHORIZATION)
    return ctx.app.emit('error', error, ctx)
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      const error = new Error(errorTypes.UNAUTHORIZATION)
      return ctx.app.emit('error', error, ctx)
    }

    ctx.username = decoded.username

    next()
  })
}

module.exports = {
  verifyLogin,
  verifyToken
}