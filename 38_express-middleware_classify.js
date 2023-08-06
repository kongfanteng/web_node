/**
 * @example
 *
 * ```js
    // Express-Middleware-中间件的分类
    // - 1、中间件的分类
    // - - 为了方便大家理解和记忆中间件的使用，Express 官方把常见的中间件用法，分为了 5 大类，分别是：
    // - - - 1）应用级别的中间件
    // - - - 2）路由级别的中间件
    // - - - 3）错误级别的中间件
    // - - - 4）Express 内置的中间件
    // - - - 5）第三方的中间件

    // - 2、应用级别的中间件
    // - - 通过 app.use() 或 app.get() 或 app.post()，绑定到 app 实例上的中间件，叫做应用级别的中间件，代码示例如下：
    // - - - 应用级别的中间件（全局中间件）；app.use；
    app.use((req, res, next) => {
      next()
    })
    // - - - 应用级别的中间件（局部中间件）；app.use, mw1, 返回 Home page.；
    app.get('/', mw1, (req, res) => {
      res.send('Home page.')
    })

    // - 3、路由级别的中间件（绑定 router 对象上）
    // - - 绑定到 express.Router() 实例上的中间件，叫做路由级别的中间件。它的用法和应用级别中间件没有任何区别。只不过，应用级别中间件时绑定到 app 实例上，路由级别中间件绑定到 router 实例上，代码示例如下：
    // - - - 路由基本的中间件
    const app = express()
    const router = app.Router()
    router.use(function(req, res, next){
      console.log('Time: ', Date.now())
      next()
    })
    app.use(router)

    // - 4、错误级别的中间件
    // - - 错误级别中间件的作用：专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题。
    // - - 格式：错误级别中间件的 function 处理函数，必须有 4 个形参，形参顺序从前到后，分别是 (err, req, res, next)
    app.get('/', (req, res) => { // - - - 路由
      throw new Error('服务器内部发生错误！')  // - - - - 抛出一个自定义的错误
      res.send('Home Page.')
    })
    app.use((err, req, res, next) => { // - - - 错误级别的中间件
      console.log(`发生了错误：${err.message}`) // - - - - 在服务器打印错误信息
      res.send('Error！' + err.message) // - - - - 向客户端响应错误相关的内容
    })
    // - - {@link file://./file/express-test-2/express-middleware/09.演示错误级别中间件的使用.js}
    // - - 注意：错误级别中间件必须注册在所有路由之后

    // - 5、Express 内置的中间件（express.static, express.json, express.urlencoded）
    // - - 自 Express 4.16.0 版本开始，Express 内置了 3 个常用的中间件，极大的提高了 Express 项目的开发效率和体验：
    // - - - 1）express.static 快速托管静态资源的内置中间件，例如：HTML 文件、图片、CSS 样式等（无兼容性）
    // - - - 2）express.json 解析 JSON 格式的请求体数据（有兼容性，仅在 4.16.0+ 版本中可用）
    // - - - 3）express.urlencoded 解析 URL-encoded 格式的请求体数据（有兼容性，仅在 4.16.0+ 版本中可用）
    // - - - - 配置解析 application/json 格式数据的内置中间件
    app.use(express.json())
    // - - - -  配置解析 application/x-www-form-urlencoded 格式数据的内置中间件
    app.use(express.urlencoded({ extended: false }))
    // - - {@link file://./file/express-test-2/express-middleware/10.演示内置中间件的使用.js}
    // - - - 创建 Web 服务器
    // - - - 注意：除了错误级别的中间件，其他中间件，必须在路由之前进行配置
    // - - - 通过 express.json() 这个中间件，解析表单中的 JSON 格式的数据
    app.use(express.json())
    // - - - post /user 返回的 req.body 查看 JSON 数据
    // - - - 测试：Postman post 请求 Body -> raw -> JSON 数据
    {
      "name": "zs",
      "age": 20
    }
    // - - - - 在服务器，可以使用 req.body 这个属性，来接收客户端发过来的请求体数据
    // - - - - 默认情况下，如果不配置解析表单数据的中间件，则 req.body 默认等于 undefined
    // - - - express.urlencoded
    // - - - 通过 express.urlencoded() 这个中间件，来解析表单中的 url-encoded 格式的数据
    app.use(express.urlencoded({ extended: false }))
    // - - - 在 /book 接口打印 req.body 来获取 JSON 格式的表单数据和 url-encoded 格式的数据
    // - - - 测试：Postman post 请求 Body -> x-www-form-urlencoded -> url-encoded 格式的数据

    // - 6、第三方的中间件
    // - - 非 Express 官方内置的，而是由第三方开发出来的中间件，叫做第三方中间件。在项目中，大家可以按需下载并配置第三方中间件，从而提高项目的开发效率
    // - - 例如：在 express@4.16.0 之前的版本中，经常使用 body-parser 这个第三方中间件，来解析请求体数据。使用步骤如下：
    // - - - 运行 npm install body-parser 安装中间件
    // - - - 使用 require 导入中间件
    // - - - 调用 app.use() 注册并使用中间件
    // - - body-parser 中间件代码描述
    // - - - {@link file://./file/express-test-2/express-middleware/11.第三方的中间件使用.js}
    // - - - 创建服务器路由 post, /user, 打印 req.body
    // - - - 导入解析表单数据的中间件 body-parser，命名 parser
    // - - - 使用 app.use() 注册中间件 parser.urlencoded({ extended: false })
    // - - - 无配置 req.body = undefined，post, /user, 打印 req.body
    // - - - 注意 Express 内置的 express.urlencoded 中间件，就是基于 body-parser 这个第三方中间件进一步封装出来的。

 * ```
 *
 */