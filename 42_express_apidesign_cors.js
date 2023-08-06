/**
 * @example
 *
 * ```js
    // Express-APIDesign-基于 cors 解决接口跨域问题
    // - 1、接口跨域问题
    // - - html GET|POST 请求按钮引入 jQuery 测试 GET|POST 接口；id：btnGET|btnPOST
    // - - {@link file://./file/express-test-3/api-design-cors/17.测试接口跨域问题.html}
    // - - 打印台出现跨域错误

    // - 2、接口跨域问题分析
    // - - cors 是 Express 的第一个第三方中间件。通过安装和配置 cors 中间件，可以很方便地解决跨域问题。
    // - - 使用步骤分为如下 3 步：
    // - - - 1）运行 npm install cors 安装中间件
    // - - - 2）使用 const cors = require('cors') 导入中间件
    // - - - 3）在路由之前调用 app.use(cors()) 配置中间件
    // - - 安装中间件 cors，解决跨域问题
    // - - 一定要在路由之前，配置 cors 这个中间件，从而解决接口跨域的问题
    const cors = require('cors')
    app.use(cors())

    // - 3、什么是 CORS？跨域资源共享
    // - - CORS（Cross-Origin Resource Sharing，跨域资源共享）由一系列 HTTP 响应头组成，这些 HTTP 响应头决定浏览器是否阻止前端 JS 代码跨域获取资源。
    // - - 浏览器的同源安全策略默认会阻止网页“跨域”获取资源。但如果接口服务器配置了 CORS 相关的 HTTP 响应头，就可以解除浏览器端的跨域访问限制。
    // - - 浏览器 -跨域请求-> 接口服务器 -响应（响应的结果被浏览器拦截，网页无法获取到跨域响应的数据）-> X
    // - - 浏览器 -跨域请求-> 接口服务器（配置 Access-Control-Allow-* 相关的响应头）-响应（在服务器端，配置 cors 相关的响应头，从而解除浏览器端的跨域访问限制）-> 网页

    // - 4、CORS 的注意事项
    // - - 1）CORS 主要在服务器端进行配置。客户端浏览器无须做任何额外的配置，即可请求开启了 CORS 的接口。
    // - - 2）CORS 在浏览器中有兼容性。只有支持 XMLHttpRequest Level2 的浏览器，才能正常访问开启了 CORS 的服务端接口（例如：IE10+、Chrome4+、FireFox3.5+）

    // - 5、CORS 响应头部 - Access-Control-Allow-Origin
    // - - 响应头部中可以携带一个 Access-Control-Allow-Origin 字段，其语法如下：
    Access-Control-Allow-Origin: <origin> | *
    // - - 其中，origin 参数的值指定了允许访问该资源的外域 URL
    // - - 例如，下面的字段值将只允许来自 http://itcast.cn 的请求
    res.setHeader('Access-Control-Allow-Origin', 'http://itcast.cn')
    // - - 如果指定了 Access-Control-Allow-Origin 字段的值为通配符 *，表示允许来自任何域的请求，示例代码如下：
    res.setHeader('Access-Control-Allow-Origin', '*')

    // - 6、CORS 响应头部 - Access-Control-Allow-Headers
    // - - 默认情况下，CORS 仅支持客户端向服务器发送如下的 9 个请求头：
    // - - - Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、Viewport-Width、Width、Content-Type（值仅限于 text/plain、multipart/form-data、application/x-www-form-urlencoded 三者之一）
    // - - 如果客户端向服务器发送了额外的请求头信息，则需要在服务器端，通过 Access-Control-Allow-Headers 对额外的请求头进行声明，否则这次请求会失败！
    // - - - 运行客户端额外向服务器发送 Content-Type 请求头和 X-Custom-Header 请求头
    // - - - 注意：多个请求头之间使用英文的逗号进行分割
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Custom-Header')

    // - 7、CORS 响应头部 - Access-Control-Allow-Methods
    // - - 默认情况下，CORS 仅支持客户端发起 GET、POST、HEAD 请求
    // - - 如果客户端希望通过 PUT、DELETE 等方式请求服务器的资源，则需要在服务器端，通过 Access-Control-Allow-Methods 来指明实际请求所允许使用的 HTTP 方法。
    // - - 示例代码如下：
    // - - - 只允许 GET、POST、HEAD、DELETE 请求方法
    res.setHeader('Access-Control-Allow-Methods', 'GET、POST、HEAD、DELETE')
    // - - - 允许所有的 HTTP 请求方法
    res.setHeader('Access-Control-Allow-Methods', '*')

 * ```
 *
 */