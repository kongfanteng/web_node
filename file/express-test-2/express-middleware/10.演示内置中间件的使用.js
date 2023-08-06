const express = require('express')
const app = express()

// - - - 创建 Web 服务器
// - - - 注意：除了错误级别的中间件，其他中间件，必须在路由之前进行配置
// - - - 通过 express.json() 这个中间件，解析表单中的 JSON 格式的数据
app.use(express.json())
// - - - 通过 express.urlencoded() 这个中间件，来解析表单中的 url-encoded 格式的数据
app.use(express.urlencoded({ extended: false }))
// - - - post /user 返回的 req.body 查看 JSON 数据
app.post('/user', (req, res) => {
  console.log('req.body:', req.body) // req.body: { name: 'zs', age: 20 }
  res.send('ok')
})
// - - - 在 /book 接口打印 req.body 来获取 JSON 格式的表单数据和 url-encoded 格式的数据
app.post('/book', (req, res) => {
  console.log('req.body', req.body)
  res.send('ok')
})

app.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})