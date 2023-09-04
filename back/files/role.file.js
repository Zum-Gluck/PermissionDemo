const fs = require('fs')
const path = require('path')
const JSON_DIR_PATH = path.resolve(__dirname, '../', './json') + '/'

function getRoleList() {
    const data = fs.readFileSync(JSON_DIR_PATH + 'roleList.json')

    const list = JSON.parse(data.toString())

    return list || []
}

function updateRoleById(id, data) {
    const json = fs.readFileSync(JSON_DIR_PATH + 'roleList.json')
    const list = JSON.parse(json.toString())

    const idx = list.findIndex(item => item.id === id)

    if (idx === -1) return null

    const target = list[idx]

    for (const key in data) {
        target[key] = data[key]
    }

    const err = fs.writeFileSync(JSON_DIR_PATH + 'roleList.json', JSON.stringify(list))

    if (!err) return target

    console.log('修改失败')
    console.log(err)
}


module.exports = {
    getRoleList,
    updateRoleById
}