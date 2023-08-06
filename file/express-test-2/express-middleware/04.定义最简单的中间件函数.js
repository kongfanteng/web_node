// - - - 引入 express，命名 express；调用 express，命名 app；启动 Web 服务器；
const express = require('express')
const app = express()
// - - - 定义一个最简单的中间件函数
const mw = function(req, res, next) {
  console.log('这是一个最简单的中间件函数')
  // 注意：在当前中间件的业务处理完毕后，必须调用 next() 函数
  // 表示把流转关系转交给下一个中间件或路由
  next()
}
app.use(function(req, res, next){
  console.log('这是一个最简单的全局中间件的简化形式')
  next()
})
app.use(mw)
app.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})