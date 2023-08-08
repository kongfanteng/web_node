// - - 导入 express，命名 express; 创建路由对象，调用 express.Router(), 命名 router; 注册新用户接口 method-post, API-/reguser; 登录接口 method-post, API-/loign; 共享路由对象 module.exports;
const express = require('express')
const router = express.Router()
// - - - 导入用户路由处理函数模块，命名 userHandler
const userHandler = require('./router_handler/user')

// - - - 导入验证表单数据的中间件，命名 expressJoi
const expressJoi = require('express-joi')
// - - - 导入需要的验证规则对象，登录注册规则 reg_login_schema
const { reg_login_schema } = require('../schema/user')
// - - - 注册新用户接口-/reguser，第二个参数填入 expressJoi.joiValidate(reg_login_schema)

// - - - 注册和登录接口中函数替换
router.post('/reguser', expressJoi.joiValidate(reg_login_schema, { strict: false }), userHandler.regUser)
router.post('/login', expressJoi.joiValidate(reg_login_schema, { strict: false }), userHandler.login)
module.exports = router
