/**
 * @example
 *
 * ```js
    // Express-APIDesign-跨域-编写 jsonp 接口
    // - 1、回顾 JSONP 的概念与特点
    // - - 概念：浏览器端通过 <script> 标签的 src 属性，请求服务器上的数据，同时，服务器返回一个函数的调用。这种请求数据的方式叫做 JSONP。
    // - - 特点：
    // - - - JSONP 不属于真正的 Ajax 请求，因为它没有使用 XMLHttpRequest 这个对象。
    // - - - JSONP 仅支持 GET 请求，不支持 POST、PUT、DELTE 等请求。

    // - 2、创建 JSONP 接口的注意事项
    // - - 如果项目中已经配置了 CORS 跨域资源共享，为了防止冲突，必须在配置 CORS 中间件之前声明 JSONP 的接口。否则 JOSNP 接口会被处理成开启了 CORS 的接口。示例代码如下：
    // - - - 优先创建 JSONP 接口【这个接口不会被处理成 CORS 接口】
    app.get('/api/jsonp', (req, res) => {})
    // - - - 再配置 CORS 中间件【后续的所有接口，都会被处理成 CORS 接口】
    app.use(cors())
    // - - - 这是一个开启了 CORS 的接口
    app.get('/api/get', (req, res) => {})
    // - - {@link file://./file/express-test-3/api-design-jsonp/app.js}

    // - 3、实现 JSONP 接口的步骤
    // - - 1、获取客户端发送过来的回调函数的名字
    // - - 2、得到要通过 JSONP 形式发送给客户端的数据
    // - - 3、根据前两步得到的数据，拼接出一个函数调用的字符串
    // - - 4、把上一步拼接得到的字符串，响应给客户端的 <script> 标签进行解析执行

    // - 4、实现 JSONP 接口的具体代码 {@link file://./file/express-test-3/api-design-jsonp/app.js}
    // - - method: GET; api: '/api/jsonp';
    // - - - 获取客户端发送过来的回调函数的名字，req.query.callback，命名 funcName
    // - - - 得到要通过 JSONP 形式发送给客户端的数据，命名 data，zs，30
    // - - - 根据前两步得到的数据，拼接出一个函数调用的字符串，命名 scriptStr，`${funcName}(${JSON.stringify(data)})`
    // - - - 把上一步拼接得到的字符串，响应给客户端的 <script> 标签进行解析执行，返回

    // - 5、在网页中使用 jQuery 发起 JSONP 请求
    // - - 调用 $.ajax() 函数，提供 JSONP 的配置选项，从而发起 JSONP 请求，示例代码如下
    // - - - #btnJSONP, click, $.ajax(), method, url, dataType, success, 打印 res

    
 * ```
 *
 */