// - - 创建 Web 服务，02.模块化路由.js
const express = require('express')
const app = express()
// - - - 导入路由模块，命名 userRouter
const userRouter = require('./03.router')
// - - - 使用 app.use() 注册路由模块
app.use(userRouter)
app.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})
