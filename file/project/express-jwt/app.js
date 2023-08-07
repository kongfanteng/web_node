const express = require('express')
// - - - 1）导入用于生成 JWT 字符串的包，命名 jwt
const jwt = require('jsonwebtoken')
// - - - 2）导入用于将客户端发送过来的 JWT 字符串，解析还原成 JSON 对象的包，命名 expressJWT
const { expressjwt: expressJWT } = require('express-jwt')
const app = express()

// - - - - 3）secret 密钥的本质：就是一个字符串，命名 secretKey, 字符串 'KFT Fighting ^_^'
const secretKey = 'KFT Fighting ^_^'

// - 5、将 JWT 字符串还原为 JSON 对象
// - - 客户端每次在访问那些有权限接口的时候，都需要主动通过请求头中的 Authorization 字段，将 Token 字符串发送到服务器进行身份认证。
// - - 此时，服务器可以通过 express-jwt 这个中间件，自动将客户端发送过来的 Token 解析还原成 JSON 对象：
// - - - 使用 app.use() 来注册中间件
// - - - expressJWT({ secret: secretKey }) 就是用来解析 Token 的中间件
// - - - .unless({ path: [/^\/api\//] }) 用来指定哪些接口不需要访问权限
app.use(
  expressJWT({ secret: secretKey, algorithms: ['HS256'] }).unless({
    path: ['/api/login'],
  })
)

// - - - 登录接口 method-post, API-/api/login
// - - - 省略登录失败情况下的代码...
// - - - 用户登录成功之后，调用 jwt.sign() 生成 JWT 字符串，通过 token 属性响应给客户端
// - - - - 参数 1：用户的信息对象 username
// - - - - 参数 2：加密的密钥 secretKey
// - - - - 参数 3：配置对象，可以配置当前 token 的有效期 expiresIn: '30s'
// - - 注意： expiresIn 为生效时间配置
app.post('/api/login', (req, res) => {
  // - - - 省略登录失败情况下的代码...
  res.send({
    status: 200,
    message: '登录成功!',
    token: jwt.sign({ username: 'kft' }, secretKey, { expiresIn: '30s' }),
  })
})

// - 6、使用 req.user 获取用户信息
// - - 当 express-jwt 这个中间件配置成功之后，即可在哪些有权限的接口中，使用 req.user 对象，来访问从 JWT 字符串中解析出来的用户信息了，示例代码如下
// - - - 定义一个有权限的接口 method-get, API-/admin/getinfo
// - - - 打印 req.user
app.get('/admin/getinfo', (req, res) => {
  console.log('req.user:', req.user)
  res.send({
    status: 200,
    message: '获取用户信息成功！',
    data: req.user,
  })
})

// - 7、捕获解析 jwt 失败后产生的错误
// - - 当使用 express-jwt 解析 JWT 字符串时，如果客户端发送过来的 Token 字符串过期或者不合法，会产生一个解析失败的错误，影响项目的正常运行。我们可以通过 Express 的错误中间件，捕获这个错误并进行相关的处理，示例代码如下
// 调用 app.use(); err.name === 'UnauthorizedError' 为 401 无效的 token; 500 未知错误;
// - - - token 解析失败导致的错误
// - - - 其他原因导致的错误
app.use((err, req, res, next) => {
  console.log('err.name:', err.name)
  if (err.name === 'UnauthorizedError')
    return res.send({ status: 401, message: '无效的 token' })
  res.send({ status: 500, message: '未知错误' })
})

app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1')
})
