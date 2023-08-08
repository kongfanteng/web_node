// - - 导入 express，命名 express; 创建路由对象，调用 express.Router(), 命名 router; 注册新用户接口 method-post, API-/reguser; 登录接口 method-post, API-/loign; 共享路由对象 module.exports;
const express = require('express')
const router = express.Router()
// - - - 导入用户路由处理函数模块，命名 userHandler
const userHandler = require('./router_handler/user')
// - - - 注册和登录接口中函数替换
router.post('/reguser', userHandler.regUser)
router.post('/login', userHandler.login)
module.exports = router
