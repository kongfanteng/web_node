/**
 * @example
 *
 * ```js
    // Express-Middleware-全局生效的中间件
    // - 1、定义中间件函数
    // - - 可以通过以下的方式，定义一个最简单的中间件函数
    // - - - 常量 mw 所指向的，就是一个中间件函数
    const mw = function(req, res, next) {
      console.log('这是一个最简单的中间件函数')
      // 注意：在当前中间件的业务处理完毕后，必须调用 next() 函数
      // 表示把流转关系转交给下一个中间件或路由
      next()
    }
    // - - 文件地址 {@link file://./file/express-test-2/express-middleware/04.定义最简单的中间件函数.js}
    // - - - 引入 express，命名 express；调用 express，命名 app；启动 Web 服务器；
    // - - - 定义一个最简单的中间件函数

    // - 2、全局生效的中间件
    // - - 客户端发起的任何请求，到达服务器后，都会触发中间件，叫做全局中间件。
    // - - 通过调用 app.use(中间件函数)，即可定义一个全局生效的中间件
    // - - - 常量 mw 所指向的，就是一个中间件函数
    const mw = function(req, res, next) {
      console.log('这是一个最简单的中间件函数')
      next()
    }
    // - - - 全局生效的中间件
    app.use(mw)
    // - - 文件地址 {@link file://./file/express-test-2/express-middleware/04.定义最简单的中间件函数.js}

    // - 3、定义全局中间件的简化形式
    // - - 全局生效的中间件
    app.use(function(req, res, next){
      console.log('这是一个最简单的全局中间件的简化形式')
      next()
    })
    // - - 文件地址 {@link file://./file/express-test-2/express-middleware/04.定义最简单的中间件函数.js}

    // - 4、中间件的作用
    // - - 多个中间件之间，共享同一份 req 和 res。基于这样的特性，我们可以在上游的中间件中，统一为 req 和 res 对象添加自定义的属性或方法，供下游的中间件或路由进行使用
    // - - 客户端 -请求-> Express（中间件1-req.a=10 --> 中间件2-res.c=30 --> 中间件N --> 处理完毕，响应这次请求，访问 req.a 和 res.c 属性的值）-响应-> 客户端
    // - - 体验中间件的作用 {@link file://./file/express-test-2/express-middleware/05.体验中间件的作用.js}
    // - - - 这是定义全局中间件的简化形式
    // - - - - 获取到请求到达服务器的时间, 命名 time，new Date()
    // - - - - 为 req 对象，挂载自定义属性，从而把时间共享给后面的所有路由，属性 startTime
    // - - - - 在 get '/'，返回 Home page.${req.startTime}；在 post '/user'，返回 User page.${req.startTime}

    // - 5、定义多个全局中间件 {@link file://./file/express-test-2/express-middleware/06.定义多个全局中间件.js}
    // - - 可以使用 app.use() 连续定义多个全局中间件。客户端请求到达服务器之后，会按照中间件定义的先后顺序依次进行调用
    // - - - 定义中间件1，返回 '调用了第一个全局中间件'；定义中间件2，返回 '调用了第二个全局中间件'

 * ```
 *
 */