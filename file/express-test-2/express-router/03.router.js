// - - - 导入 express，命名 express
const express = require('express')
// - - - 创建路由对象 express.Router()，命名 router
const router = express.Router()
// - - - 挂载获取用户列表的路由，router.get，/user/list，Get user list
router.get('/user/get', (req, res) => {
  res.send('Get user list')
})
// - - - 挂载添加用户的路由，router.post，/user/add，Add new user
router.post('/user/add', (req, res) => {
  res.send('Add new user')
})
// - - - 向外导出路由对象
module.exports = router
