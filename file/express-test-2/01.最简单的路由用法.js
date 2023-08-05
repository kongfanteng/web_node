// - - - - 引入 express，创建 Web 服务器，命名为 app
const express = require('express')
const app = express()
// - - - - 挂载路由 app.get app.post
app.get('/', function(req, res) {
  res.send('Hello World')
})
app.post('/', function(req, res) {
  res.send('Post Request')
})
// - - - - 启动 Web 服务器
app.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})
