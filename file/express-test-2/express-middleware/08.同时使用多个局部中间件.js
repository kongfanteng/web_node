const express = require('express')
const app = express()
// - 1、局部生效的中间件
// - - 不使用 app.use() 定义的中间件，叫做局部生效的中间件
// - - - 定义中间件函数 mw1，打印 这是中间件函数
const mw1 = (req, res, next) => {
  console.log('调用了第一个局部生效的中间件')
  next()
}
const mw2 = (req, res, next) => {
  console.log('调用了第二个局部生效的中间件')
  next()
}

// app.get('/', mw1, mw2, (req, res) => { res.end('Home page.') })
app.get('/', [mw1, mw2], (req, res) => { res.end('Home page.') })

app.get('/user', (req, res) => {
  res.send('User page.')
})

app.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})