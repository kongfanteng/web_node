// - - - 导入验证数据合法性的中间件 express-joi ，命名 expressJoi
const expressJoi = require('express-joi')

// - - - - 导入 express，命名 express
const express = require('express')
// - - - - 创建路由对象，命名 router
const router = express()

// - - - - 导入用户信息的处理函数模块，命名 userinfo_handler
const userinfo_handler = require('./router_handler/userinfo')
// - - - 导入需要的验证规则对象，命名 update_userinfo_schema
const { update_userinfo_schema } = require('../schema/user')

// - - - 更新用户的基本信息，method-/userinfo, 传参-expressJoi.joiValidate(update_userinfo_schema)
router.post('/userinfo', expressJoi.joiValidate(update_userinfo_schema), userinfo_handler.updateUserInfo)

// - - - - 获取用户的基本信息 method-get; API-/userinfo
router.get('/userinfo', userinfo_handler.getUserInfo)
// - - - - 向外共享路由对象
module.exports = router
