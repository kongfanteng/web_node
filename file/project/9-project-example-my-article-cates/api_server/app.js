// - - - 导入 express，命名 express; 创建 express 实例，命名 app; 调用 app.listen()，指定端口号 3007 并启动服务器
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('./config')

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
app.use(function (req, res, next) {
  // status = 0 为成功；status = 1 为失败；默认将 status 的值设置为 1，方便处理失败的情况
  res.cc = function (err, status = 1) {
    res.send({
      // 状态
      status,
      // 状态描述，判断 err 是错误对象还是字符串
      message: err instanceof Error ? err.message : err,
    })
  }
  next()
})

// - - - 导入 express-jwt 包，解析 token 中间件，命名 expressJWT
const expressJWT = require('express-jwt')
// - - - 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 token 身份认证
app.use(
  expressJWT({ secret: config.jwtSecretKey, algorithms: ['HS256'] }).unless({
    path: [/^\/api\//],
  })
)

// - 2、在 app.js 中，导入并使用用户路由模块，命名 userRouter
const userRouter = require('./router/user')
app.use('/api', userRouter)

// - - - - 导入并使用个人中心的路由模块，命名 userinfoRouter
const userinfoRouter = require('./router/userinfo')
// - - - - 注意：以 /my 开头的接口，都是有权限的接口，需要进行 Token 身份认证，调用 app.use()
app.use('/my', userinfoRouter)

// - - - - 导入 article.js，命名 artCateRouter; app.use(); 前缀-'/my/article'
const artCateRouter = require('./router/artcate')
app.use('/my/article', artCateRouter)

// - - - - 引入 @hapi/joi，命名 joi
const joi = require('@hapi/joi')
// - - - - 错误中间件
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
  if (err instanceof joi.ValidatationError) return res.cc(err)
  res.cc(err)
})

// write your code here
app.listen(3007, () => {
  console.log('Express server running at http://127.0.0.1:3007')
})
