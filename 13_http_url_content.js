/**
 * @example
 *
 * ```js
    // http：根据不同的 url 响应不同的 html 内容
    // - 1、核心实现步骤 6 步（代码描述）
    // - - 1）获取请求的 url 地址，url
    // - - 2）设置默认的响应内容为 404 Not found，h1
    // - - 3）判断用户请求的是否为 / 或 /index.html 首页 h1
    // - - 4）判断用户请求的是否为 /about.html 关于页面 h1
    // - - 5）设置 Content-Type 响应头，防止中文乱码
    // - - 6）使用 res.end() 把内容响应给客户端
 * ```
 * 
 */
// - - - 1）导入 http 模块：如果希望在自己的电脑上创建一个 web 服务器，从而对外提供 web 服务，则需要导入 http 模块
const http = require('http')
// - - - 2）创建 web 服务器实例：调用 http.createServer() 方法，即可快速创建一个 web 服务器实例：
const server = http.createServer()
// - - - 3）为服务器实例绑定 request 事件：为服务器实例绑定 request 事件，即可监听客户端发送过来的网络请求：
server.on('request', (req, res) => {
  // - 1、核心实现步骤 6 步（代码描述）
  // - - 1）获取请求的 url 地址，url
  /** @type {string} url - 请求的 url 地址 */
  const url = req.url
  // - - 2）设置默认的响应内容为 404 Not found，h1
  /** @type {string} content - 响应内容 */
  let content = '<h1>404 Not found!</h1>'
  // - - 3）判断用户请求的是否为 / 或 /index.html 首页 h1
  if (url === '/' || url === '/index.html') {
    content = '<h1>首页</h1>'
  }else if (url === '/about.html') {
    // - - 4）判断用户请求的是否为 /about.html 关于页面 h1
    content = '<h1>关于页面</h1>'
  }
  // - - 5）设置 Content-Type 响应头，防止中文乱码
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  // - - 6）使用 res.end() 把内容响应给客户端
  res.end(content)
})
// - - - 4）启动服务器：调用服务器实例的 .listen() 方法，即可启动当前的 web 服务器实例：
server.listen(80, () => {
  console.log('http server running at http://127.0.0.1')
})
