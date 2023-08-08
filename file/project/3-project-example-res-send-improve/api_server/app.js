// - - - 导入 express，命名 express; 创建 express 实例，命名 app; 调用 app.listen()，指定端口号 3007 并启动服务器
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// - 2、配置 cors 跨域，配置表单数据中间件
// - - 2）在 app.js 中导入并配置 cors 中间件
// - - - 导入 cors 中间件，命名 cors; 将 cors 注册为全局中间件，调用 app.use()
const cors = require('cors')
app.use(cors())
app.use(bodyParser())

// - 3、配置解析表单数据的中间件
// - - 1）通过如下的代码，配置解析 application/x-www-form-urlencoded 格式的表单数据的中间件：
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// - - 在处理函数中，需要多次调用 res.send() 向客户端处理失败的结果，为了简化代码，可以手动封装一个 res.cc() 函数
// - - 1）在 app.js 中，所有路由之前，声明一个全局中间件，为 res 对象挂载一个 res.cc() 函数
// - - - 响应数据的中间件
app.use(function(req, res, next) {
  // status = 0 为成功；status = 1 为失败；默认将 status 的值设置为 1，方便处理失败的情况
  res.cc = function(err, status = 1) {
    res.send({
      // 状态
      status,
      // 状态描述，判断 err 是错误对象还是字符串
      message: err instanceof Error ? err.message : err
    })
  }
  next()
})

// - 2、在 app.js 中，导入并使用用户路由模块，命名 userRouter
const userRouter = require('./router/user')
app.use(userRouter)

// - - - - 引入 @hapi/joi，命名 joi
const joi = require('@hapi/joi')
// - - - - 错误中间件
app.use((err, req, res, next) => {
  console.log('err:', err)
  if (err instanceof joi.ValidatationError) return res.cc(err)
  res.cc(err)
})

// write your code here
app.listen(3007, () => {
  console.log('Express server running at http://127.0.0.1:3007')
})
