// - - - 导入 express
const express = require('express')
// - - - 创建 Web 服务器
const app = express()

app.use('/public', express.static('public'))

// - - - 调用 app.listen(端口号，启动成功后的回调函数)，启动服务器
app.listen(3001, () => {
  console.log('express server running at http://127.0.0.1:3001')
  console.log(
    '静态资源： \r\n',
    `http://localhost:3001/public/images/bg.jpg \r\n`,
    `http://localhost:3001/public/css/style.css \r\n`,
    `http://localhost:3001/public/js/login.js`
  )
})
