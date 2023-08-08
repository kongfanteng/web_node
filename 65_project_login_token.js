/**
 * @example
 *
 * ```js
    // Project-token 的生成与验证
    // - 1、生成 JWT Token 字符串
    // - - 核心注意点
    // - - 1）通过 ES6 的高级语法，快速剔除密码和头像的值
    // - - - 剔除完毕之后，user 中只保留了用户的 id，username，nickname，email 这四个属性的值，命名 user
    const user = { ...results[0], password: '', user_pic: '' }
    // - - 2）运行如下命令，安装生成 Token 字符串的包
    npm i jsonwebtoken@8.5.1
    // - - 3）在 /router_handler/user.js 模块的头部区域，导入 jsonwebtoken 包
    // - - - {@link file://./file/project/4-project-example-router-login/api_server/router/router_handler/user.js}
    // - - - 用这个包来生成 Token 字符串，命名 jwt
    const jwt = require('jsonwebtoken')
    // - - 4）创建 config.js 文件，并向外共享加密和还原 Token 的 jwtSecretKey 字符串：
    module.exports = {
      jwtSecretKey: 'KFT Fighting. ^_^'
    }
    // - - 5）将用户信息对象加密成 Token 字符串
    // - - - 导入配置文件，命名 config
    // - - - {@link file://./file/project/4-project-example-router-login/api_server/config.js}
    const config = require('../config')
    // - - - 生成 Token 字符串，命名 tokenStr, 调用 jwt.sign 函数
    // - - - {@link file://./file/project/4-project-example-router-login/api_server/router/router_handler/user.js}
    const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: '10h' })
    // - - 6）将生成的 Token 字符串响应给客户端：
    res.send({
      status: 0,
      message: '登录成功！',
      token: `Bearer ${tokenStr}`
    })
    
    // - 2、配置解析 Token 的中间件
    // - - 1）运行如下的命令，安装解析 Token 的中间件
    npm i express-jwt@5.3.3
    // - - 2）在 app.js 中注册路由之前，配置解析 Token 的中间件
    // - - - {@link file://./file/project/4-project-example-router-login/api_server/app.js}
    // - - - 导入配置文件，命名 config
    const config = require('../config')
    // - - - 导入 express-jwt 包，解析 token 中间件，命名 expressJWT
    const expressJWT = require('express-jwt')
    // - - - 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 token 身份认证
    app.use( expressJWT({ secret: config.jwtSecretKey, algorithms: ['HS256'] }) ).unless({ path: [/^\/api\//] })

    // - - 3）在 app.js 中的错误级别中间件里面，捕获并处理 Token 认证失败后的错误
    // - - - {@link file://./file/project/4-project-example-router-login/api_server/app.js}
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')

 * ```
 *
 */