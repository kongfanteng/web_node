// - - 5）创建基本的 Web 服务器
// - - - （1）导入 express
const express = require('express')
// - - - （2）创建 Web 服务器
const app = express()
// - - - （3）调用 app.listen(端口号，启动成功后的回调函数)，启动服务器
app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})
