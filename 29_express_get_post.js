/**
 * @example
 *
 * ```js
    // express-监听 GET 和 POST 请求并处理参数
    // - 1、监听 GET 请求
    // - - 通过 app.get() 方法，可以监听客户端的 GET 请求，具体的语法格式如下：
    // - - - 参数 1：客户端请求的 URL 地址
    // - - - 参数 2：请求对应的处理函数
    // - - - - req：请求对象（包含了与请求相关的属性与方法）
    // - - - - res：响应对象（包含了与响应相关的属性与方法）
    app.get('请求 URL', function(req, res) { 
      // 处理函数
    })

    // - 2、监听 POST 请求
    // - - 通过 app.post() 方法，可以监听客户端的 POST 请求，具体的语法格式如下：
    // - - - 参数 1：客户端请求的 URL 地址
    // - - - 参数 2：请求对应的处理函数
    // - - - - req：请求对象（包含了与请求相关的属性与方法）
    // - - - - res：响应对象（包含了与响应相关的属性与方法）
    app.post('请求 URL', function(req, res) { 
      // 处理函数
    })

    // - 3、把内容响应给客户端
    // - - 通过 res.send() 方法，可以把处理好的内容，发送给客户端：
    app.get('/user', (req, res) => {
      // 向客户端发送 JSON 对象
      res.send({name: 'zs', age: 20, gender: '男'})
    })
    app.post('/user', (req, res) => {
      // 向客户端发送文本内容
      res.send('请求成功')
    })

    // - 4、代码实现-监听 GET 请求和 POST 请求并把内容响应给客户端
    // - - 文件地址 {@link file://./file/express-test-2/express-get-post/index.js}

    // - 5、获取 URL 中携带的查询参数
    // - - 通过 req.query 对象，可以访问到客户端通过查询字符串的方式，发送到服务器的参数：
    app.get('/', (req, res) => {
      // req.query 默认是一个空对象
      // 客户端使用 ?name=zs&age=20 这种查询字符串形式，发送到服务器的参数
      // 可以通过 req.query 对象访问到，例如：
      // req.query.name req.query.age
      console.log('req.query:', req.query) // req.query: { name: 'zs', age: '20' }
    })

    // - 6、获取 URL 动态参数
    // - - 通过 req.params 对象，可以访问到 URL 中，通过 : 匹配到的动态参数
    // - - - URL 地址中，可以通过 :参数名 的形式，匹配动态参数值
    app.get('/user/:id', (req, res) => {
      // req.params 默认是一个空对象
      // 里面存放着通过 : 动态匹配到的参数值
      console.log('req.params:', req.params) // req.params: { id: '3333' }
      res.send(req.params)
    })

 * ```
 * 
 */