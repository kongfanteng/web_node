/**
 * @example
 *
 * ```js
    // APIDesign-创建 Web 服务器 & 创建 API 路由模块
    // - 1、app.js【创建 Web 服务器，文件地址 {@link file://./file/express-test-3/api-design-begin/app.js}】
    // - - 引入 express，命名 express
    // - - 创建 express 服务器实例，命名 app
    // - - 启动 Web 服务器，打印 Express server running at http://127.0.0.1

    // - 2、创建 API 路由模块
    // - - apiRouter.js 【路由模块 {@link file://./file/express-test-3/api-design-begin/apiRouter.js}】
    // - - - 引入 express
    // - - - 调用 express.Router()，命名 apiRouter
    // - - - module.exports 导出 apiRouter
    // - - app.js【导入并注册路由模块 {@link file://./file/express-test-3/api-design-begin/app.js}】
    // - - - app.use, '/api', apiRouter

 * ```
 *
 */