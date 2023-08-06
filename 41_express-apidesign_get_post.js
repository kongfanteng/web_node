/**
 * @example
 *
 * ```js
    // Express-APIDesign-编写 GET 接口
    // - 【{@link file://./file/express-test-3/api-design-begin/apiRouter.js}】
    // - 路由 '/get'，请求 GET 
    // - - 获取到客户端通过查询字符串，发送服务器的数据，命名 query
    // - - 调用 res.send() 方法，把数据响应给客户端
    // - - 返回对象：状态：status，0 表示成功，1 表示失败；状态描述，msg，'GET 请求成功'；需要响应给客户端的具体数据：data，query；
    // - 测试 http://127.0.0.1/api/get?name=zs&age=20

    // Express-APIDesign-编写 POST 接口
    // - 路由 '/post'，请求 POST
    // - - 获取客户端通过请求体，发送到服务器的 URL-endcoded 数据，命名 body
    // - - 调用 res.send() 方法，把数据响应给客户端
    // - - 返回对象：状态：status，0 表示成功，1 表示失败；状态描述，msg，'POST 请求成功'；需要响应给客户端的具体数据：data，body； 
    // - - 注意：如果要获取 URL-encoded 格式的请求体数据，必须配置中间件 app.use(express.urlencoded({ extended: false }))

 * ```
 *
 */