const express = require('express')
const parser = require('body-parser')
// const cors = require('cors')
const app = express()
// - - - 1）导入 session 中间件；命名 session
const session = require('express-session')
// - - - 2）配置 session 中间件；app.use(); session(); secret 属性值可以为任何字符串，keyboard cat；resave，固定写法，false；saveUninitialized，固定写法，false；
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  })
)
app.use(parser.urlencoded({ extended: false }))
// app.use(cors())
app.use(express.static('./'))

// - 3、向 session 中存数据 {@link file://./file/project/express-session-use/app.js}
// - - 当 express-session 中间件配置成功后，即可通过 req.session 来访问和使用 session 对象，从而存储用户的关键信息：
app.post('/api/login', (req, res) => {
  // 判断用户提交的登录信息是否正确
  if (req.body.username !== 'admin' || req.body.password !== '000000') {
    return res.send({ status: 1, msg: '登录失败' })
  }
  req.session.user = req.body // 将用户的信息，存储到 Session 中
  req.session.islogin = true // 将用户的登录状态，存储到 Session 中
  res.send({ status: 0, msg: '登录成功' })
})
// - - 注意：只有成功配置了 express.session 这个中间件之后，才能够通过 req.session 这个属性

// - 4、从 session 中取数据
// - - 可以直接从 req.session 对象上获取之前存储的数据，示例代码如下
// - - - 获取用户姓名的接口
app.get('/api/username', (req, res) => {
  // 判断用户是否登录
  if (!req.session.islogin) {
    return res.send({ status: 1, msg: 'fail：未登录' })
  }
  res.send({ status: 0, msg: 'success', username: req.session.user.username })
})

// - 5、清空 session
// - - 调用 req.session.destroy() 函数，即可清空服务器保存的 session 信息。
// - - - 退出登录的接口
app.post('/api/loginout', (req, res) => {
  // 清空当前客户端对应的 session 信息
  req.session.destroy()
  res.send({ status: 0, msg: '退出登录成功' })
})

app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1')
})
