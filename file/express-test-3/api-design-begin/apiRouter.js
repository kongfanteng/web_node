// - - - 引入 express
const express = require('express')
// - - - 调用 express.Router()，命名 apiRouter
const apiRouter = express.Router()

// - 路由 '/get'，请求 GET
apiRouter.get('/get', (req, res) => {
  // - - 获取到客户端通过查询字符串，发送服务器的数据，命名 query
  const query = req.query
  // - - 调用 res.send() 方法，把数据响应给客户端
  res.send({
    // - - 返回对象：状态：status，0 表示成功，1 表示失败；状态描述，msg，'GET 请求成功'；需要响应给客户端的具体数据：data，query；
    status: 0,
    msg: 'GET 请求成功',
    data: query,
  })
})

// - 路由 '/post'，请求 POST
apiRouter.post('/post', (req, res) => {
  // - - 获取客户端通过请求体，发送到服务器的 URL-endcoded 数据，命名 body
  const body = req.body
  // - - 调用 res.send() 方法，把数据响应给客户端
  res.send({
    // - - 返回对象：状态：status，0 表示成功，1 表示失败；状态描述，msg，'POST 请求成功'；需要响应给客户端的具体数据：data，body；
    status: 0,
    msg: 'POST 请求成功',
    data: body,
  })
})

// - - - 定义 DELETE 接口，router.delete, /delete, 返回对象：status，msg, 'DELETE 请求成功'
apiRouter.delete('/delete', (req, res) => {
  res.send({
    status: 0,
    msg: 'DELETE 请求成功',
  })
})

// - - - module.exports 导出 apiRouter
module.exports = apiRouter
