/**
 * @example
 *
 * ```js
    // Express-Middleware-自定义中间件
    // - 1、需求描述与实现步骤（6步）
    // - - 自己动手模拟一个类似于 express.urlencoded 这样的中间件，来解析 POST 提交到服务器的表单数据。
    // - - 实现步骤：
    // - - - 1）定义中间件
    // - - - 2）监听 req 的 data 事件
    // - - - 3）监听 req 的 end 事件
    // - - - 4）使用 querystring 模块解析请求体数据
    // - - - 5）将解析出来的数据对象挂载为 req.body
    // - - - 6）将自定义中间件封装为模块
    
    // 代码实现：
    // - 文件地址：{@link file://./file/express-test-2/express-middleware/12.自定义解析表单数据的中间件.js}
    // - 1）定义中间件（解析表单数据中间件）
    // - - 使用 app.use() 来定义全局生效的中间件，代码如下
    app.use(function(req, res, next){
      // 中间件业务逻辑
    })
    // - 2）监听 req 的 data 事件
    // - - 在中间件中，需要监听 req 对象的 data 事件，来获取客户端发送到服务器的数据
    // - - 如果数据量比较大，无法一次性发生完毕，则客户端会把数据切割后，分批发送到服务器。所以 data 事件可能会触发多次，每一次触发 data 事件时，获取到的数据只是完整数据的一部分，需要手动对接收到的数据进行拼接。
    // - - 代码描述：
    // - - - 定义变量，用来存储客户端发送过来的请求体数据
    let str = ''
    // - - - 监听 req 对象的 data 事件（客户端发送过来的新的请求体数据）
    req.on('data', (chunk) => {
      // 拼接请求体数据，隐式转换为字符串
      str += chunk
    })

    // - 3）监听 req 的 end 事件
    // - - 当请求体数据接收完毕之后，会自动触发 req 的 end 事件。
    // - - 因此，我们可以在 req 的 end 事件中，拿到并处理完整的请求体数据。示例代码如下：
    // - - - 监听 req 对象的 end 事件（请求体发送完毕后会自动触发）
    req.on('end', () => {
      // 打印完整的请求体数据
      console.log('str:', str)
      // TODO: 把字符串格式的请求体数据，解析成对象格式
    })
    
    // - 4）使用 querystring 模块解析请求体数据
    // - - Node.js 内置了一个 querystring 模块，专门用来处理查询字符串。通过这个模块提供的 parser() 函数，可以轻松把查询字符串，解析成对象的格式。示例代码如下：
    // - - - 导入处理 querystring 的 Node.js 内置模块，命名 qs
    const qs = require('querystring')
    // - - - 调用 qs.parse() 方法，把查询字符串解析为对象
    const body = qs.parse(str)
    // - - 代码实现描述
    // - - - 把字符串格式的请求体数据，解析成对象格式，命名 body 并打印
    const body = qs.parse(str)
    console.log('body:', body)
    // - - 测试 

    // - 5）将解析出来的数据对象挂载为 req.body
    // - - 上游的中间件和下游的中间件及路由之间，共享一份 req 和 res。因此，我们可以将解析出来的数据，挂载为 req 的自定义属性，命名为 req.body，供下游使用。示例代码如下：
    req.on('end', () => {
      // - - - 调用 qs.parse() 方法，把查询字符串解析为对象
      const body = qs.parse(str) 
      // - - - 将解析出来的请求体对象，挂载为 req.body 属性
      req.body = body
      // - - - 最后一定要调用 next() 函数，执行后续的业务逻辑
      next()
    })
    // - - 定义 post, /user, 返回 req.body

    // - 6）将自定义中间件封装为模块
    // - - {@link file://./file/express-test-2/express-middleware/14.custom-body-parser.js}
    // - - - 导入 Node.js 内置的 querystring 模块
    const qs = require('querystring')
    // - - - 定义函数变量 bodyParser
    // - - - module.exports 导出 bodyParser
    // - - {@link file://./file/express-test-2/express-middleware/14.custom-body-parser-test.js}
    // - - - 导入自己封装的中间件模块，命名 customBodyParser
    // - - - 将自定义中间件函数，注册为全局可用的中间件，app.use
    
 * ```
 *
 */