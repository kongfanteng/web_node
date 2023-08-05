// - - - 导入 express
const express = require('express')
// - - - 创建 Web 服务器
const app = express()

// - - 通过 res.send() 方法，可以把处理好的内容，发送给客户端：
app.get('/user', (req, res) => {
  console.log('req.query:', req.query)
  
  // 向客户端发送 JSON 对象
  res.send({name: 'zs', age: 20, gender: '男'})
})
app.get('/user/:id', (req, res) => {
  // req.params 默认是一个空对象
  // 里面存放着通过 : 动态匹配到的参数值
  console.log('req.params:', req.params)
  res.send(req.params)
})
app.post('/user', (req, res) => {
  // 向客户端发送文本内容
  res.send('请求成功')
})

// - - - 调用 app.listen(端口号，启动成功后的回调函数)，启动服务器
app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})