// - - - 导入 express
const express = require('express')
// - - - 创建 Web 服务器
const app = express()

app.use(express.static('public'))
app.use(express.static('files'))

// - - - 调用 app.listen(端口号，启动成功后的回调函数)，启动服务器
app.listen(3000, () => {
  console.log('express server running at http://127.0.0.1:3000')
  console.log(
    '静态资源： \r\n',
    `http://localhost:3000/images/bg.jpg \r\n`,
    `http://localhost:3000/css/style.css \r\n`,
    `http://localhost:3000/js/login.js`
  )
})
