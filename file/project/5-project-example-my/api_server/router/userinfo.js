// - - - - 导入 express，命名 express
const express = require('express')
// - - - - 创建路由对象，命名 router
const router = express()

// - - - - 导入用户信息的处理函数模块，命名 userinfo_handler
const userinfo_handler = require('./router_handler/userinfo')

// - - - - 获取用户的基本信息 method-get; API-/userinfo
router.get('/userinfo', userinfo_handler.getUserInfo)
// - - - - 向外共享路由对象
module.exports = router
