// - - - 创建 Web 服务器
const express = require('express')
const app = express()
// - - - 创建服务器路由 post, /user, 打印 req.body
// - - - 导入解析表单数据的中间件 body-parser，命名 parser
const parser = require('body-parser')
// - - - 使用 app.use() 注册中间件 parser.urlencoded({ extended: false })
app.use(parser.urlencoded({ extended: false }))
app.post('/user', (req, res) => {
  console.log('req.body:', req.body)
  // - - - 无配置 req.body = undefined，post, /user, 打印 req.body
  // - - - 注意 Express 内置的 express.urlencoded 中间件，就是基于 body-parser 这个第三方中间件进一步封装出来的。
  res.send('ok')
})

app.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})