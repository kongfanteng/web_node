/**
 * @example
 *
 * ```js
    // http：时钟 web 服务案例
    // - 1、核心思路-服务器充当字符串的搬运工
    // - - 把文件的实际存放路径，作为每个资源的请求 url 地址
    // - - - 在浏览器中访问如下网址：/clock/index.html; /clock/index.css; /clock/index.js; 
    // - - - 请求 -> 服务器 -> 把文件的实际存放路径作为每个资源的请求 url 路径；因此，可以直接把请求的 url 地址，当做读取文件的路径；将读取到的文件内容（字符串），通过 res.end() 响应给客户端；
    // - - - 读文件 -> 磁盘目录 -> 项目根目录；clock；index.html；index.css；index.js；注意：项目根目录以 / 表示；因此每个文件的存放路径是 /clock/index.html; /clock/index.css; /clock/index.js;
    // - - - 读取完毕 -> 服务器；服务器充当的角色就是一个字符串的搬运工；
    // - - - 响应 -> 浏览器；客户端请求回来的，不是具体的文件，而是文件中所存储的字符串；
    // - 2、实现步骤（五步）（代码描述）
    // - - 1）导入需要的模块
    // - - - 导入模块 http、fs、path
    // - - 2）创建基本的 web 服务器
    // - - - createServer, request, listen
    // - - 3）将资源的请求 url 映射为文件的存放路径
    // - - - 获取到客户端请求的 url 地址, url, /clock/index.html
    // - - - 把请求的 url 路径，映射为本地文件的存放路径, fpath
    // - - 4）读取文件内容并响应给客户端
    // - - - 根据映射过来的文件路径读取文件, readFile, res.end
    // - - 5）优化资源的请求路径
    // - - - 预定义空白的文件存放路径
    // - - - - 如果请求的路径是否为 /，则手动指定文件的存放路径
    // - - - - 如果请求的路径不为 /，则动态拼接文件的存放路径
 * ```
 * 
 */
// - - - 1）导入 http 模块：如果希望在自己的电脑上创建一个 web 服务器，从而对外提供 web 服务，则需要导入 http 模块
// - - 1）导入需要的模块
// - - - 导入模块 http、fs、path
const http = require('http')
const fs = require('fs')
const path = require('path')
// - - - 2）创建 web 服务器实例：调用 http.createServer() 方法，即可快速创建一个 web 服务器实例：
const server = http.createServer()
// - - - 3）为服务器实例绑定 request 事件：为服务器实例绑定 request 事件，即可监听客户端发送过来的网络请求：
server.on('request', (req, res) => {
  // - - 3）将资源的请求 url 映射为文件的存放路径
  /** @type {string} url - 请求的 url 路径 */
  // - - - 获取到客户端请求的 url 地址, url, /clock/index.html
  const url = req.url
  // - - - 把请求的 url 路径，映射为本地文件的存放路径, fpath
  // - - 5）优化资源的请求路径
  // - - - 预定义空白的文件存放路径
  // - - - - 如果请求的路径是否为 /，则手动指定文件的存放路径
  // - - - - 如果请求的路径不为 /，则动态拼接文件的存放路径
  let fpath = ''
  if (url === '/') {
    fpath = path.join(__dirname, '/file/clock/index.html')
  } else {
    fpath = path.join(__dirname, '/file/clock', url)
  }
  // - - 4）读取文件内容并响应给客户端
  // - - - 根据映射过来的文件路径读取文件, readFile, res.end
  fs.readFile(fpath, 'utf8', (err, dataStr) => {
    if (err) return res.end(err.message)
    res.end(dataStr)
  })
})
// - - - 4）启动服务器：调用服务器实例的 .listen() 方法，即可启动当前的 web 服务器实例：
server.listen(80, () => {
  console.log('http server running at http://127.0.0.1')
})
