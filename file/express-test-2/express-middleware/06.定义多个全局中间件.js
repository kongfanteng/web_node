// - - - 引入 express，命名 express；调用 express，命名 app；启动 Web 服务器；
const express = require('express')
const app = express()

// - - - 定义中间件1，返回 '调用了第一个全局中间件'；
app.use(function(req, res, next){
  console.log('调用了第一个全局中间件')
  next()
})
// 定义中间件2，返回 '调用了第二个全局中间件'
app.use(function(req, res, next){
  console.log('调用了第二个全局中间件')
  next()
})
app.get('/', (req, res) => {
  res.send(`Home page.${req.startTime}`)
})

app.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})
