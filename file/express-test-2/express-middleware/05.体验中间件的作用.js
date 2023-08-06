// - - - 引入 express，命名 express；调用 express，命名 app；启动 Web 服务器；
const express = require('express')
const app = express()

// - - - 这是定义全局中间件的简化形式
app.use(function(req, res, next){
  // - - - - 获取到请求到达服务器的时间, 命名 time，new Date()
  const time = new Date()
  // - - - - 为 req 对象，挂载自定义属性，从而把时间共享给后面的所有路由，属性 startTime
  req.startTime = time
  next()
})
// - - - - 在 get '/'，返回 Home page.${req.startTime}；在 post '/user'，返回 User page.${req.startTime}
app.get('/', (req, res) => {
  res.send(`Home page.${req.startTime}`)
})
app.post('/user', (req, res) => {
  res.send(`User page.${req.startTime}`)
})

app.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})
