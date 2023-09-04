const fs = require('fs')
const path = require('path')
const JSON_DIR_PATH = path.resolve(__dirname, '../', './json') + '/'

function getUserByUserName(username) {
    const data = fs.readFileSync(JSON_DIR_PATH + 'userList.json')
    const list = JSON.parse(data.toString())

    const idx = list.findIndex(item => item.username === username)

    if (idx === -1) return null

    return list[idx]
}

function getUserPermissonByRoleID(roleId) {
    const data = fs.readFileSync(JSON_DIR_PATH + 'roleList.json')
    const list = JSON.parse(data.toString())

    const idx = list.findIndex(item => item.id === roleId)
    if (idx === -1) return null

    return list[idx].permission
}


module.exports = {
    getUserByUserName,
    getUserPermissonByRoleID
}