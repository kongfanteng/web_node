// - - 引入 express，命名 express
const express = require('express')
// - - 创建 express 服务器实例，命名 app
const app = express()
const cors = require('cors')
app.use(express.urlencoded({ extended: false }))

// - - 如果项目中已经配置了 CORS 跨域资源共享，为了防止冲突，必须在配置 CORS 中间件之前声明 JSONP 的接口。否则 JOSNP 接口会被处理成开启了 CORS 的接口。示例代码如下：
// - - - 优先创建 JSONP 接口【这个接口不会被处理成 CORS 接口】
app.get('/api/jsonp', (req, res) => {
  // - - - 获取客户端发送过来的回调函数的名字，req.query.callback，命名 funcName
  const funcName = req.query.callback
  // - - - 得到要通过 JSONP 形式发送给客户端的数据，命名 data，zs，30
  const data = { name: 'zs', age: 30 }
  // - - - 根据前两步得到的数据，拼接出一个函数调用的字符串，命名 scriptStr，`${funcName}(${JSON.stringify(data)})`
  const scriptStr = `${funcName}(${JSON.stringify(data)})`
  // - - - 把上一步拼接得到的字符串，响应给客户端的 <script> 标签进行解析执行，返回
  res.send(scriptStr)
})

app.use(cors())
// - - - app.use, '/api', apiRouter
// 导入并注册路由模块
const apiRouter = require('./apiRouter')
app.use('/api', apiRouter)

// - - 启动 Web 服务器，打印 Express server running at http://127.0.0.1
app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1')
})
