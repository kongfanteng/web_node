// - - - 导入 Node.js 内置的 querystring 模块
const qs = require('querystring')
// - - - 定义函数变量 bodyParser
const bodyParser = function (req, res, next) {
  // 中间件业务逻辑
  // - - - 定义变量，用来存储客户端发送过来的请求体数据
  let str = ''
  // - - - 监听 req 对象的 data 事件（客户端发送过来的新的请求体数据）
  req.on('data', (chunk) => {
    // 拼接请求体数据，隐式转换为字符串
    str += chunk
  })
  // - - - 监听 req 对象的 end 事件（请求体发送完毕后会自动触发）
  req.on('end', () => {
    // - - - 调用 qs.parse() 方法，把查询字符串解析为对象
    const body = qs.parse(str)
    // - - - 将解析出来的请求体对象，挂载为 req.body 属性
    req.body = body
    // - - - 最后一定要调用 next() 函数，执行后续的业务逻辑
    next()
  })
}
// - - - module.exports 导出 bodyParser
module.exports = bodyParser
