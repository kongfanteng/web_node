const express = require('express')
const app = express()

// - - 错误级别中间件的作用：专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题。
// - - 格式：错误级别中间件的 function 处理函数，必须有 4 个形参，形参顺序从前到后，分别是 (err, req, res, next)
app.get('/', (req, res) => { // - - - 路由
  throw new Error('服务器内部发生错误！')  // - - - - 抛出一个自定义的错误
  res.send('Home Page.')
})
app.use((err, req, res, next) => { // - - - 错误级别的中间件
  console.log(`发生了错误：${err.message}`) // - - - - 在服务器打印错误信息
  res.send('Error！' + err.message) // - - - - 向客户端响应错误相关的内容
})

app.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})