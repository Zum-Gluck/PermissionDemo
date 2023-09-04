/**
 * @param {*} firstPage 页面具体配置  permissionTree[首页] 是个value
 * @return 不含show write 仅用于页面展示
 */
export function constructPageViewTrees(firstPage) {
  const keys = Object.keys(firstPage)
  const res = { }
  keys.forEach(key => {
    const item = firstPage[key]
    const tree = array2objRecursive(item.config)
    res[key] = { ...item }
    res[key]['config'] = tree
  })
  return res
}

// 递归将数组，根据name 转化为对象
function array2objRecursive(config, res = {}) {
  if (Array.isArray(config)) {
    config.forEach(item => {
      array2objRecursive(item, res)
    })
  } else if (typeof config === 'object' && config !== null) {
    res[config.name] = {}
  }
  return res
}

// 构建用于提交至服务器的树，含show，false
// 构建的是当前页面的树
export function constructFullTreeByPageName(config, t_or_f) {
  const res = {}
  for (const k in config) {
    const page = config[k]
    res[k] = buildTreeRecursive(page, t_or_f)
    res[k].show = t_or_f
    res[k].write = t_or_f
  }

  return res
}

// 递归给所有页面配置show write
function buildTreeRecursive(page, t_or_f, res = {}) {
  if (Array.isArray(page)) {
    page.forEach(item => buildTreeRecursive(item, t_or_f, res))
  } else if (typeof page === 'object' && page !== null) {
    if (page.name) {
      res[page.name] = {
        show: t_or_f,
        write: t_or_f
      }
    } else {
      for (const key in page) {
        res[key] = {
          show: t_or_f,
          write: t_or_f
        }
        buildTreeRecursive(page[key].config, t_or_f, res[key])
      }
    }
  }
  return res
}

