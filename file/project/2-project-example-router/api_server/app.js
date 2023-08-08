// - - - 导入 express，命名 express; 创建 express 实例，命名 app; 调用 app.listen()，指定端口号 3007 并启动服务器
const express = require('express')
const app = express()

// - 2、配置 cors 跨域，配置表单数据中间件
// - - 2）在 app.js 中导入并配置 cors 中间件
// - - - 导入 cors 中间件，命名 cors; 将 cors 注册为全局中间件，调用 app.use()
const cors = require('cors')
app.use(cors())
app.use(express.json())

// - 3、配置解析表单数据的中间件
// - - 1）通过如下的代码，配置解析 application/x-www-form-urlencoded 格式的表单数据的中间件：
app.use(express.urlencoded({ extended: false }))

// - 2、在 app.js 中，导入并使用用户路由模块，命名 userRouter
const userRouter = require('./router/user')
app.use(userRouter)

// write your code here
app.listen(3007, () => {
  console.log('Express server running at http://127.0.0.1:3007')
})
