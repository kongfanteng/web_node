// - - 引入 express，命名 express
const express = require('express')
// - - 创建 express 服务器实例，命名 app
const app = express()
app.use(express.urlencoded({ extended: false }))

// - - - app.use, '/api', apiRouter
// 导入并注册路由模块
const apiRouter = require('./apiRouter')
app.use('/api', apiRouter)

// - - 启动 Web 服务器，打印 Express server running at http://127.0.0.1
app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1')
})
