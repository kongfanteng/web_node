/**
 * @example
 *
 * ```js
    // Project-初始化路由模块
    // - 1、在 router 文件夹中，新建 user.js 文件，作为用户的路由模块，并初始化代码如下
    // - - {@link file://./file/project/2-project-example-router/api_server/router/user.js}
    // - - 导入 express，命名 express; 创建路由对象，调用 express.Router(), 命名 router; 注册新用户接口 method-post, API-/reguser; 登录接口 method-post, API-/loign; 共享路由对象 module.exports;
    const express = require('express')
    const router = express.Router()
    router.post('/reguser', (req, res) => {
      res.send('reguser ok')
    })
    router.post('/login', (req, res) => {
      res.send('login ok')
    })
    module.exports = router

    // - 2、在 app.js 中，导入并使用用户路由模块，命名 userRouter {@link file://./file/project/2-project-example-router/api_server/app.js}
    const userRouter = require('./router/user')
    app.use(userRouter)
    // - - Postman 调试

    // - 3、抽离用户路由模块中的处理函数
    // - - 目的：为了保证路由模块的纯粹性，所有的路由处理函数，必须抽离到对应的路由处理函数模块中
    // - - 1）在 /router_handler/user.js 中，使用 exports 对象，分别向外共享如下两个路由处理函数：
    // - - - {@link file://./file/project/2-project-example-router/api_server/router/router_handler/user.js}
    // - - - 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
    // - - - 注册用户的处理函数 属性名 regUser
    exports.regUser = (req, res) => {
      res.send('reguser ok')
    }
    // - - - 登录的处理函数 属性名 login
    exports.login = (req, res) => {
      res.send('login ok')
    }
    // - - 2）将 /router/user.js 中的代码修改为如下结构
    // - - - {@link file://./file/project/2-project-example-router/api_server/router/user.js}
    // - - - 导入用户路由处理函数模块，命名 userHandler
    const userHandler = require('./router_handler/user')
    // - - - 注册和登录接口中函数替换
    router.post('/reguser', userHandler.regUser)
    router.post('/login', userHandler.login)
    // - - Postman 调试
    
 * ```
 *
 */