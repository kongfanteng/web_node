/**
 * @example
 *
 * ```js
    // 一、http：理解 http 模块概念及作用
    // - 1、什么是 http 模块
    // - - 什么是客户端、什么是服务器
    // - - - 在网络节点中，负责消费资源的电脑，叫做客户端；负责对外提供网络资源的电脑，叫做服务器。
    // - - http 模块是 Node.js 官方提供的、用来创建 web 服务器的模块。通过 http 模块提供的 http.createServer() 方法，就能方便的吧一台普通的电脑，变成一台 Web 服务器，从而对外提供 Web 资源服务
    // - - 如果要希望使用 http 模块创建 Web 服务器，则需要先导入它：
    const http = require('http')
    // - 2、进一步理解 http 模块的作用
    // - - 服务器和普通电脑的区别在于，服务器上安装了 web 服务器软件，例如：IIS、Apache 等。通过安装这些服务器软件，就能吧一台普通的电脑变成一台 web 服务器
    // - - 在 Node.js 中，我们不需要不使用 IIS、Apache 等这些第三方 web 服务器软件。因为我们可以基于 Node.js 提供的 http 模块，通过几行简单的代码，就能轻松的手写一个服务器软件，从而对外提供 web 服务

    // 二、http：服务器相关的概念
    // - 1、IP 地址
    // - - IP 地址就是互联网上每台计算机的唯一地址，因此 IP 地址具有唯一性。如果把”个人电脑“比作”一台电话“，那么”IP 地址“就相当于”电话号码“，只有在知道对方 IP 地址的前提下，才能与对应的电脑之间进行数据通信。
    // - - IP 地址的格式：通常”点分十进制“表示成（a.b.c.d）的形式，其中，a，b，c，d 都是 0~255 之间的十进制整数。例如：用点分十进表示的 IP 地址（192.168.1.1）
    // - - 注意：
    // - - - 互联网中每台 Web 服务器，都有自己的 IP 地址，例如：Windows 终端中运行 ping www.baidu.com 命令，即可查看到百度服务器的 IP 地址，Mac 电脑使用 `sudo apachetl start` 启动本地服务器
    // - - - 在开发期间，自己的电脑既是一台服务器，也是一个客户端，为了方便测试，可以在自己的浏览器中输入 127.0.0.1 这个 IP 地址，就能把自己的电脑当做一台服务器进行访问了

    // - 2、域名（方便）和域名服务器
    // - - 尽管 IP 地址能够唯一地标记网络上的计算机，但 IP 地址是一长串数字，不直观，而且不便于记忆，于是人们又发明了另一套字符型的地址方案，即所谓的域名（Domain Name）地址
    // - - IP 地址和域名是一一对应的关系，这份对应关系存放在一种叫做域名服务器（DNS，Domain name server）的电脑中。使用者只需通过好记的域名访问对应的服务器即可，对应的转换工作有域名服务器实现。因此，域名服务器就是提供 IP 地址和域名之间的转换服务的服务器。
    // - - 注意：
    // - - - 单纯使用 IP 地址，互联网中的电脑也能够正常工作。但是有了域名的加持，能让互联网的世界变得更加方便
    // - - - 在开发测试期间，127.0.0.1 对应的域名是 localhost，它们都代表我们自己这台电脑，在使用效果上没有任何区别。

    // - 3、端口号（门牌号）
    // - - 计算机中的端口号，就好像是现实生活中的门牌号一样。通过门牌号，外卖小哥可以在整栋大楼众多房间中，准确把外卖送到你的手中。
    // - - 同样的道理，在一台电脑中，可以运行成百上千个 web 服务器。每个 web 服务都对应一个唯一的端口号。客户端发送过来的网络请求，通过端口号，可以被准确地交给对应的 web 服务进行处理
    // - - 注意：
    // - - - 每个端口号不能同时被多个 web 服务器占用
    // - - - 在实际应用中，URL 中的 80 端口可以被省略

    // 三、创建 web 服务器的基本步骤
    // - 1、创建 web 服务器基本步骤
    // - - 导入 http 模块
    // - - 创建服务器实例
    // - - 为服务器实例绑定 request 事件，监听客户端的请求
    // - - 启动服务器
    // - 2、创建 web 服务器实现
    // - - 代码描述
    // - - - 1）导入 http 模块：如果希望在自己的电脑上创建一个 web 服务器，从而对外提供 web 服务，则需要导入 http 模块
    const http = require('http')
    // - - - 2）创建 web 服务器实例：调用 http.createServer() 方法，即可快速创建一个 web 服务器实例：
    const server = http.createServer()
    // - - - 3）为服务器实例绑定 request 事件：为服务器实例绑定 request 事件，即可监听客户端发送过来的网络请求：
    server.on('request', (req, res) => {
      // 只要有服务器来请求我们自己的服务器，就会触发 request 事件，从而调用这个事件处理函数
      console.log('Someone visit our web server')
    })
    // - - - 4）启动服务器：调用服务器实例的 .listen() 方法，即可启动当前的 web 服务器实例：
    server.listen(80, () => {
      console.log('http server running at http://127.0.0.1')
    })
    // - 3、req 请求对象-客户端相关数据
    // - - 只要服务器接收到了客户端的请求，就会调用 server.on() 为服务器绑定的 request 事件处理函数。
    // - - 如果想要在事件处理函数中，访问与客户端相关的数据或属性，可以使用如下的方式：
    server.on('request', (req) => {
      const str = `out request url is ${req.url}, and request method is ${req.method}`
      console.log('str:', str)
    })
    // - - POST 通过 postman 实现
    // - 4、res 响应对象-服务器相关内容
    // - - 在服务器的 request 事件处理函数中，如果想访问与服务器相关的数据或属性，可以使用如下的方式
    server.on('request', (req, res) => {
      const str = `out request url is ${req.url}, and request method is ${req.method}`
      // res.end() 方法的作用
      // 向客户端发生指定的内容，并结束这次请求的处理过程
      res.end(str)
    })
    // - 5、解决中文乱码问题
    // - - 当调用 res.end() 方法，向客户端发送中文内容的时候，会出现乱码问题，此时，需要手动设置内容的编码格式：
    server.on('request', (req, res) => {
      const str = `您请求的 url 地址是 ${req.url}, 请求的 method 类型是 ${req.method}`
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      // res.end() 方法的作用
      // 向客户端发生指定的内容，并结束这次请求的处理过程
      res.end(str)
    })
 * ```
 * 
 */
// - - - 1）导入 http 模块：如果希望在自己的电脑上创建一个 web 服务器，从而对外提供 web 服务，则需要导入 http 模块
const http = require('http')
// - - - 2）创建 web 服务器实例：调用 http.createServer() 方法，即可快速创建一个 web 服务器实例：
const server = http.createServer()
// - - - 3）为服务器实例绑定 request 事件：为服务器实例绑定 request 事件，即可监听客户端发送过来的网络请求：
server.on('request', (req, res) => {
  // 只要有服务器来请求我们自己的服务器，就会触发 request 事件，从而调用这个事件处理函数
  const str = `您请求的 url 地址是 ${req.url}, 请求的 method 类型是 ${req.method}`
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  // res.end() 方法的作用
  // 向客户端发生指定的内容，并结束这次请求的处理过程
  res.end(str)
})
// - - - 4）启动服务器：调用服务器实例的 .listen() 方法，即可启动当前的 web 服务器实例：
server.listen(80, () => {
  console.log('http server running at http://127.0.0.1')
})
