/**
 * @example
 *
 * ```js
    // Project-My-获取用户基本信息的接口
    // - 1、个人中心需开发接口
    // - - 获取用户的基本信息
    // - - 更新用户的基本信息
    // - - 充值密码
    // - - 更换头像

    // - 2、获取用户的基本信息
    // - - 0）实现步骤
    // - - - 初始化路由模块
    // - - - 初始化路由处理函数模块
    // - - - 获取用户的基本信息

    // - - 1）初始化路由模块
    // - - -（1）创建 /router/userinfo.js 路由模块，并初始化如下的结构代码：
    // - - - - {@link file://./file/project/5-project-example-my/api_server/router/userinfo.js}
    // - - - - 导入 express，命名 express
    const express = require('express')
    // - - - - 创建路由对象，命名 router
    const router = express()
    // - - - - 获取用户的基本信息 method-get; API-/userinfo
    router.get('/userinfo', (req, res) => {
      res.send('获取用户的基本信息 ok')
    })
    // - - - - 向外共享路由对象
    module.exports = router
    // - - -（2）在 app.js 中导入并使用个人中心的路由模块
    // - - - - {@link file://./file/project/5-project-example-my/api_server/app.js}
    // - - - - 导入并使用个人中心的路由模块，命名 userinfoRouter
    const userinfoRouter = require('./router/userinfo')
    // - - - - 注意：以 /my 开头的接口，都是有权限的接口，需要进行 Token 身份认证，调用 app.use()
    app.use('/my', userinfoRouter)

    // - - 2）初始化路由处理函数模块
    // - - -（1）创建 /router/router-handler/userinfo.js 路由处理函数模块，并初始化如下的代码结构
    // - - - - {@link file://./file/project/5-project-example-my/api_server/router/router_handler/userinfo.js}
    // - - - - 获取用户基本信息的处理函数，命名 getUserInfo
    // - - -（2）修改 /router/userinfo.js 代码
    // - - - - {@link file://./file/project/5-project-example-my/api_server/router/userinfo.js}
    // - - - - 导入用户信息的处理函数模块，命名 userinfo_handler

    // - - 2）获取用户的基本信息
    // - - -（1）在 /router_handler/userinfo.js 头部导入数据库操作模块：
    // - - - - {@link file://./file/project/5-project-example-my/api_server/router/router_handler/userinfo.js}
    // - - - - 导入数据库操作模块，命名 db
    // - - - - 定义 SQL 语句，命名 sql
    // - - - - 调用 db.query() 执行 SQL 语句


 * ```
 *
 */