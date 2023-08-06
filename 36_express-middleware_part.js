/**
 * @example
 *
 * ```js
    // Express-Middleware-局部生效的中间件
    // - 1、局部生效的中间件
    // - - 不使用 app.use() 定义的中间件，叫做局部生效的中间件
    // - - - 定义中间件函数 mw1，打印 这是中间件函数
    // - - - mw1 这个中间件只在‘当前路由中生效’，这种用法属于‘局部生效的中间件’，mw1 传入 get 第二个参数，返回 Home page.
    // - - - mw1 这个中间件不会影响之后的路由 get, /user;
    // - - {@link file://./file/express-test-2/express-middleware/07.局部生效的中间件.js}

    // - 2、定义多个局部中间件
    // - - 可以在路由中，通过如下两种等价的方式，使用多个局部中间件：
    // - - - 以下两种写法是“完全等价”的，可根据自己的喜好，选择任意一种方式进行使用
    app.get('/', mw1, mw2, (req, res) => { res.end('Home page.') })
    app.get('/', [mw1, mw2], (req, res) => { res.end('Home page.') })
    // - - {@link file://./file/express-test-2/express-middleware/08.同时使用多个局部中间件.js}
    
 * ```
 *
 */