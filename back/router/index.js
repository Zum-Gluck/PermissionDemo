const fs = require('fs')

module.exports = function (app) {
  fs.readdirSync(__dirname).forEach((item) => {
    if (item === 'index.js') return
    const router = require(`./${item}`)
    app.use(router.routes())
    app.use(router.allowedMethods())
  })
}
