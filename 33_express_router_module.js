/**
 * @example
 *
 * ```js
    // Express-Router-路由的模块化
    // - 1、模块化路由
    // - - 为了方便对路由进行模块化管理，Express 不建议将路由直接挂载到 app 上，而是推荐奖路由抽离为单独的模块。
    // - - 将路由抽离为单独模块的步骤如下：
    // - - - 1）创建路由模块对应的 .js 文件
    // - - - 2）调用 express.Router() 函数创建路由对象
    // - - - 3）向路由对象上挂载具体的路由
    // - - - 4）使用 module.exports 向外共享路由对象
    // - - - 5）使用 app.use() 函数注册路由模块
    
    // - 2、创建路由模块
    // - - 1）创建路由对象，{@link file://./file/express-test-2/express-router/03.router.js}
    // - - - 导入 express，命名 express
    // - - - 创建路由对象 express.Router()，命名 router
    // - - - 挂载获取用户列表的路由，router.get，/user/list，Get user list
    // - - - 挂载添加用户的路由，router.post，/user/add，Add new user
    // - - - 向外导出路由对象
    // - - 创建 Web 服务，{@link file://./file/express-test-2/express-router/02.模块化路由.js}
    // - - - 导入路由模块，命名 userRouter
    // - - - 使用 app.use() 注册路由模块
    
    // - 3、为路由模块添加前缀，{@link file://./file/express-test-2/express-router/03.模块化路由前缀.js}
    // - - 类似于托管静态资源时，为静态资源统一挂载访问前缀一样，路由模块添加前缀的方式也非常简单：
    // - - - 导入路由模块，命名 userRouter
    // - - - 使用 app.use() 注册路由模块，并添加统一的访问前缀 /api
    // - - - 注意：app.use() 函数的作用，就是来注册全局中间件
    
 * ```
 * 
 */