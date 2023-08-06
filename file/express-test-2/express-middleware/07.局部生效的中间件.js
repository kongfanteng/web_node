const express = require('express')
const app = express()
// - 1、局部生效的中间件
// - - 不使用 app.use() 定义的中间件，叫做局部生效的中间件
// - - - 定义中间件函数 mw1，打印 这是中间件函数
const mw1 = (req, res, next) => {
  console.log('这是中间件函数')
  next()
}
// - - - mw1 这个中间件只在‘当前路由中生效’，这种用法属于‘局部生效的中间件’，mw1 传入 get 第二个参数，返回 Home page.
app.get('/', mw1, (req, res) => {
  res.send('Home page.')
})
// - - - mw1 这个中间件不会影响之后的路由, get, /user;
app.get('/user', (req, res) => {
  res.send('User page.')
})

app.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})